import { z } from "zod";

export const envVariables = z.object({
  NEXT_PUBLIC_ENV: z.union([z.literal("develop"), z.literal("production")])
});

envVariables.parse(process.env);
