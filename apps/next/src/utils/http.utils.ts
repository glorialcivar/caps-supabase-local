import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ApiInputInputs, ApiInputValidation } from "@simple/types";
import { ResponseBodyError, ResponseBodySuccess } from "@simple/types";
import { ApiHandlerFn } from "@simple/types";
import { ApiResponse } from "@simple/types";

export const getDomainURL = (path: string) => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  return url + path;
};

/** DANGER!!!!!!!!!!!!!!!!!! SERVER ONLY !!!!!!!!!!!!!!!!!!!!!!!*/
export const createServiceHandlerClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("You are about to leak sensitive data");
  }
  return createClient<DB>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    // TODO: ver si esto le hace más lento
    { auth: { persistSession: false } }
  );
};

export const Response = {
  /** Http status code 200 */
  ok: <TBody extends ResponseBodySuccess>(body: TBody) => {
    return NextResponse.json(body, { status: 200 });
  },
  /** Http status code 201 */
  created: <TBody extends ResponseBodySuccess>(body: TBody) => {
    return NextResponse.json(body, { status: 201 });
  },
  /** Http status code 400. Request contains malformed data */
  badRequest: <TBody extends ResponseBodyError>(body?: Partial<TBody>) => {
    const error = "Request contains malformed data";
    const res = { error, details: null, ...body };
    return NextResponse.json(res, { status: 400 });
  },
  /** Http status code 401. Invalid or expired access token */
  unauthorized: <TBody extends ResponseBodyError>(body?: Partial<TBody>) => {
    const error = "Invalid or expired access token";
    const res = { error, details: null, ...body };
    return NextResponse.json(res, { status: 401 });
  },
  /** Http status code 402. Pending payment */
  paymentRequired: <TBody extends ResponseBodyError>(body?: Partial<TBody>) => {
    const res = { error: "Pending payment", details: null, ...body };
    return NextResponse.json(res, { status: 402 });
  },
  /** Http status code 404. Resource not found */
  notFound: <TBody extends ResponseBodyError>(body?: Partial<TBody>) => {
    const res = { error: "Resource not found", details: null, ...body };
    return NextResponse.json(res, { status: 404 });
  },
  /** Http status code 422. Internal validation failed */
  unprocessableContent: <TBody extends ResponseBodyError>(
    body?: Partial<TBody>
  ) => {
    const res = { error: "Internal validation failed", details: null, ...body };
    return NextResponse.json(res, { status: 422 });
  },
  /** Http status code 429. API ratelimit exceeded */
  tooManyRequests: <TBody extends ResponseBodyError>(body?: Partial<TBody>) => {
    const res = { error: "API ratelimit exceeded", details: null, ...body };
    return NextResponse.json(res, { status: 429 });
  }
};

/**
 *
 * TRPC Fake implementation for public API while we wait for the fetch adapter
 *
 * Reason:
 * - Easier migration
 * - Validate inputs
 * - Transform outputs
 *
 * */

// Response validation
const getResponseSchema = <TSchema extends z.ZodType>(dataSchema: TSchema) => {
  return z
    .object({
      data: dataSchema,
      page: z.number().optional(),
      hasMorePages: z.boolean().optional(),
      total: z.number().optional()
    })
    .or(z.object({ error: z.string(), details: z.any() }));
};

// Handle inputs
const apiInputValidation = <
  THeaders extends z.ZodObject<any>,
  TSearchParams extends z.ZodObject<any>,
  TBody extends z.ZodObject<any>,
  TParams extends z.ZodObject<any>
>(
  inputs: ApiInputInputs<
    THeaders["_output"],
    TSearchParams["_output"],
    TBody["_output"],
    TParams["_output"]
  >,
  validation: ApiInputValidation<THeaders, TSearchParams, TBody, TParams>
) => {
  let response: NextResponse<ResponseBodyError> | null = null;
  let prunedInputs = inputs;
  try {
    prunedInputs = validation.parse(inputs) as ApiInputInputs<
      THeaders["_output"],
      TSearchParams["_output"],
      TBody["_output"],
      TParams["_output"]
    >;
  } catch (error) {
    response = Response.unprocessableContent({ details: error });
    // Don't leak sensitive data when input validation failed
    prunedInputs = { headers: {}, searchParams: {}, body: {}, params: {} };
  }
  return {
    handle: <TData>(
      cb: ApiHandlerFn<
        THeaders["_output"],
        TSearchParams["_output"],
        TBody["_output"],
        TParams["_output"],
        TData
      >
    ) =>
      apiHandler<THeaders, TSearchParams, TBody, TParams, TData>(
        response,
        prunedInputs,
        cb
      )
  };
};

// Handle business logic
const apiHandler = <
  THeaders extends z.ZodObject<any>,
  TSearchParams extends z.ZodObject<any>,
  TBody extends z.ZodObject<any>,
  TParams extends z.ZodObject<any>,
  TData = unknown
>(
  error: NextResponse<ResponseBodyError> | null,
  inputs: ApiInputInputs<
    THeaders["_output"],
    TSearchParams["_output"],
    TBody["_output"],
    TParams["_output"]
  >,
  cb: ApiHandlerFn<
    THeaders["_output"],
    TSearchParams["_output"],
    TBody["_output"],
    TParams["_output"],
    TData
  >
) => {
  const response = error ? Promise.resolve(error) : cb(inputs);
  return {
    response,
    output: <TSchema extends z.ZodType>(validation: TSchema) => {
      return apiOutputValidation(response, validation);
    }
  };
};

// Handle transformers
const apiOutputValidation = async <TData, TSchema extends z.ZodType>(
  response: Promise<ApiResponse<TData>>,
  validation: TSchema
): Promise<ApiResponse<TSchema["_output"]>> => {
  try {
    const res = await response;
    const json = (await res.json()) as TData;
    const schema = getResponseSchema(validation);
    const data = schema.parse(json);
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return Response.unprocessableContent({ details: error });
  }
};

// Orchestrator
export const api = (
  req: NextRequest,
  body: Record<string, unknown> = {},
  params: Record<string, string | string[]> = {}
) => {
  const inputs = {
    headers: Object.fromEntries(req.headers.entries()),
    searchParams: Object.fromEntries(new URL(req.url).searchParams.entries()),
    body,
    params
  } satisfies ApiInputInputs<any, any, any, any>;
  return {
    input: <
      THeaders extends z.ZodObject<any>,
      TSearchParams extends z.ZodObject<any>,
      TBody extends z.ZodObject<any>,
      TParams extends z.ZodObject<any>
    >(
      validation: ApiInputValidation<THeaders, TSearchParams, TBody, TParams>
    ) => {
      return apiInputValidation<THeaders, TSearchParams, TBody, TParams>(
        inputs,
        validation
      );
    },
    handle: <
      THeaders extends z.ZodObject<any>,
      TSearchParams extends z.ZodObject<any>,
      TBody extends z.ZodObject<any>,
      TParams extends z.ZodObject<any>,
      TData
    >(
      cb: ApiHandlerFn<
        THeaders["_output"],
        TSearchParams["_output"],
        TBody["_output"],
        TParams["_output"],
        TData
      >
    ) => {
      return apiHandler<THeaders, TSearchParams, TBody, TParams, TData>(
        null,
        inputs,
        cb
      );
    }
  };
};
