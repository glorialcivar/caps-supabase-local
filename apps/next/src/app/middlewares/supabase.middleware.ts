// Supabase middleware

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";

import { handleMiddleware } from "./utils.middleware";

export const supabaseMiddleware = (req: NextRequest) => {
  return handleMiddleware(req, async (req, res) => {
    // Refresh auth session cookie
    const supabase = createMiddlewareClient<DB>({ req, res });
    await supabase.auth.getSession();
    return res;
  });
};
