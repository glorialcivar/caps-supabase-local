import { z } from "zod";

export const envVariables = z.object({
  NEXT_PUBLIC_ENV: z.union([z.literal("develop"), z.literal("production")]),
  AUTH_SECRET: z.string().min(32),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string()
});

envVariables.parse(process.env);
