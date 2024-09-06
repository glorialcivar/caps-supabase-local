// Common validations
import { ApiInputValidationOverrides } from "@simple/types";
import { CONSTANTS } from "@simple/utils";
import { z } from "zod";
import { errorUtil } from "zod/lib/helpers/errorUtil";

const { GENERAL } = CONSTANTS;
const { MAX_PAGE_SIZE } = GENERAL;

const statusValidation = (options?: readonly [string, ...string[]]) => {
  const selectedOptions = options ?? ["ACTIVE", "INACTIVE"];
  return z.enum(selectedOptions);
};

const nameLaxValidation = () => {
  return z.string().min(1, "Required").max(100).trim();
};

const nameValidation = () => {
  return z.string().min(1, "Required").max(100).trim();
};

const percentageValidation = () => {
  return z.number().min(0).max(100);
};

const jsonStringValidation = () => {
  // Min 2 takes into consideration stringify any json value
  return z.string().min(2, "Invalid JSON input");
};

const jsonValidation = () => {
  return z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.record(z.string(), z.any()),
    z.array(z.any())
  ]);
};

const jsonObjectValidation = () => {
  return z.record(z.string(), common.json());
};

const externalIdValidation = () => {
  return z.string().min(1).max(64);
};

const phoneValidation = () => {
  return z.string().regex(/\d/g).min(8).max(20);
};

const dobValidation = () => {
  return common.dateString();
};

const documentTypeValidation = () => {
  return z.union([z.literal("CI"), z.literal("RUC"), z.literal("PASSPORT")]);
};

const documentNumberValidation = () => {
  return z.string().min(4).max(20);
};

const genderValidation = () => {
  return z.union([z.literal("MALE"), z.literal("FEMALE")]);
};

const dateStringValidation = () => {
  return z.string().datetime({ offset: true });
};

const selectByRangeValidation = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  limit = MAX_PAGE_SIZE
) => {
  const invalidRangeLimits =
    "Invalid range. 'from' must be less than or equal to 'to'";
  const invalidRangeDistance = `Invalid range, range cannot exceed ${limit} records. Update either 'from' or 'to'.`;

  return schema
    .merge(
      z.object({
        from: z.number().int().min(0),
        to: z.number().int().min(0)
      })
    )
    .refine(data => data.from! <= data.to!, invalidRangeLimits)
    .refine(data => data.to! - data.from! <= limit, invalidRangeDistance);
};

const selectByFilterValidation = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  limit = MAX_PAGE_SIZE
) => {
  const invalidRangeLimits =
    "Invalid range. 'from' must be less than or equal to 'to'";
  const invalidRangeDistance = `Invalid range, range cannot exceed ${limit} records. Update either 'from' or 'to'.`;

  return schema
    .merge(
      z.object({
        from: z.number().int().min(0),
        to: z.number().int().min(0),
        start_date: z.string().datetime({ offset: true }).optional(),
        end_date: z.string().datetime({ offset: true }).optional(),
        id: z.string().min(1).optional(),
        uid: z.string().min(1).optional(),
        packageId: z.string().min(1).optional(),
        name: z.string().min(1).optional()
      })
    )
    .refine(data => data.from! <= data.to!, invalidRangeLimits)
    .refine(data => data.to! - data.from! <= limit, invalidRangeDistance);
};

const selectByQueryValidation = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>
) => {
  return schema.merge(
    z.object({
      q: z.string(),
      limit: z.number().min(0).max(MAX_PAGE_SIZE).optional()
    })
  );
};

const inputsValidation = <
  THeaders extends Record<string, z.ZodType>,
  TSearchParams extends Record<string, z.ZodType>,
  TBody extends Record<string, z.ZodType>,
  TParams extends Record<string, z.ZodType>
>(
  inputs?: ApiInputValidationOverrides<THeaders, TSearchParams, TBody, TParams>
) => {
  const headers = inputs?.headers ?? ({} as THeaders);
  const searchParams = inputs?.searchParams ?? ({} as TSearchParams);
  const body = inputs?.body ?? ({} as TBody);
  const params = inputs?.params ?? ({} as TParams);

  return z.object({
    headers: z.object<THeaders>({ ...headers }),
    searchParams: z.object<TSearchParams>({ ...searchParams }),
    body: z.object<TBody>({ ...body }),
    params: z.object<TParams>({ ...params })
  });
};

const apiInputsValidation = <
  THeaders extends Record<string, z.ZodType>,
  TSearchParams extends Record<string, z.ZodType>,
  TBody extends Record<string, z.ZodType>,
  TParams extends Record<string, z.ZodType>
>(
  inputs?: ApiInputValidationOverrides<THeaders, TSearchParams, TBody, TParams>
) => {
  const { headers, ...rest } = inputs ?? {};
  return inputsValidation({
    /* headers: { "x-channel-id": common.id(), ...headers }, */
    headers,
    ...rest
  });
};

const apiInputsPaginatedValidation = <
  THeaders extends Record<string, z.ZodType>,
  TSearchParams extends Record<string, z.ZodType>,
  TBody extends Record<string, z.ZodType>,
  TParams extends Record<string, z.ZodType>
>(
  inputs?: ApiInputValidationOverrides<THeaders, TSearchParams, TBody, TParams>,
  limit = MAX_PAGE_SIZE
) => {
  const invalidRangeLimits =
    "Invalid range. 'from' must be less than or equal to 'to'";
  const invalidRangeDistance = `Invalid range, range cannot exceed ${limit} records. Update either 'from' or 'to'.`;
  const { headers, ...rest } = inputs ?? {};
  const searchParams = {
    ...((inputs?.searchParams ?? {}) as TSearchParams | undefined),
    from: z.coerce.number().int().min(0),
    to: z.coerce.number().int().min(0)
  };
  const base = common.apiInputs({ ...rest, searchParams });
  return base
    .refine(d => d.searchParams.from < d.searchParams.to, invalidRangeLimits)
    .refine(
      d => d.searchParams.to - d.searchParams.from <= limit,
      invalidRangeDistance
    );
};

export const common = {
  id: (message?: errorUtil.ErrMessage | undefined) => z.string().uuid(message),
  externalId: externalIdValidation,
  name: nameValidation,
  nameLax: nameLaxValidation,
  description: () => z.string().max(255),
  status: statusValidation,
  percentage: percentageValidation,
  phone: phoneValidation,
  dob: dobValidation,
  documentType: documentTypeValidation,
  documentNumber: documentNumberValidation,
  gender: genderValidation,
  dateString: dateStringValidation,
  json: jsonValidation,
  jsonObject: jsonObjectValidation,
  jsonString: jsonStringValidation,
  inputs: inputsValidation,
  selectByRange: selectByRangeValidation,
  selectByFilter: selectByFilterValidation,
  selectByQuery: selectByQueryValidation,
  apiInputs: apiInputsValidation,
  apiInputsPaginated: apiInputsPaginatedValidation
};
