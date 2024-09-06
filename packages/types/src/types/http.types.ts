// http types and interfaces

import { NextResponse } from "next/server";
import { z } from "zod";

export type ResponseBodySuccess = { data: unknown };
export type ResponseBodyError = { error: string; details: unknown };
export type ResponseBody = ResponseBodySuccess | ResponseBodyError;

export type ApiInputValidationOverrides<
  THeaders extends Record<string, z.ZodType>,
  TSearchParams extends Record<string, z.ZodType>,
  TBody extends Record<string, z.ZodType>,
  TParams extends Record<string, z.ZodType>
> = {
  headers?: THeaders;
  searchParams?: TSearchParams;
  body?: TBody;
  params?: TParams;
};

export type ApiInputValidation<
  THeaders extends z.ZodObject<any>,
  TSearchParams extends z.ZodObject<any>,
  TBody extends z.ZodObject<any>,
  TParams extends z.ZodObject<any>
> =
  | z.ZodObject<{
      headers?: THeaders;
      searchParams?: TSearchParams;
      body?: TBody;
      params?: TParams;
    }>
  | z.ZodEffects<
      z.ZodObject<{
        headers?: THeaders;
        searchParams?: TSearchParams;
        body?: TBody;
        params?: TParams;
      }>
    >
  | z.ZodEffects<
      z.ZodEffects<
        z.ZodObject<{
          headers?: THeaders;
          searchParams?: TSearchParams;
          body?: TBody;
          params?: TParams;
        }>
      >
    >;

export type ApiOutputValidation<TData> =
  | z.ZodObject<{
      data: z.ZodType<TData>;
    }>
  | z.ZodObject<{
      error: z.ZodString;
    }>;

export interface ApiInputInputs<
  THeaders extends Record<string, string>,
  TSearchParams extends Record<string, string>,
  TBody extends Record<string, unknown>,
  TParams extends Record<string, string>
> {
  headers: THeaders;
  searchParams: TSearchParams;
  body: TBody;
  params: TParams;
}

export type ApiResponse<TData> = NextResponse<
  ApiOutputValidation<TData>["_output"]
>;

export type ApiHandlerFn<
  THeaders extends Record<string, string>,
  TSearchParams extends Record<string, string>,
  TBody extends Record<string, unknown>,
  TParams extends Record<string, string>,
  TData
> = (
  input: ApiInputInputs<THeaders, TSearchParams, TBody, TParams>
) => Promise<ApiResponse<TData>>;

export interface ValidateFrontendTokenResponse {
  success: boolean;
  status: number;
  headers?: any;
}
