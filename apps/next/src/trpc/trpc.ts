import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import { cookies } from "next/headers";

import { createContext } from "./trpc.context";

const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create();

const setSupabaseMiddleWare = t.middleware(async options => {
  const { next } = options;
  const supabase = createRouteHandlerClient<DB>({ cookies });
  return next({ ctx: { supabase } });
});

const isDashboardUserMiddleware = t.middleware(async options => {
  const { ctx, next } = options;
  const res = await ctx.supabase.auth.getSession();
  const { session } = res.data;
  if (!session) throw new TRPCError({ code: "UNAUTHORIZED" });
  const userId = session.user.id;
  return next({ ctx: { session, userId } });
});

export const router = t.router;
export const mergeRouters = t.mergeRouters;
// Doesn't require authentication or authorization
export const publicProcedure = t.procedure.use(setSupabaseMiddleWare);
// Only Dashboard users can access this procedure
export const userProcedure = publicProcedure.use(isDashboardUserMiddleware);
