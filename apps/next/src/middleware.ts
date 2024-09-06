import { type NextRequest } from "next/server";

import { commonMiddleware } from "app/middlewares/common.middleware";
import { corsMiddleware } from "app/middlewares/cors.middleware";
import { supabaseMiddleware } from "app/middlewares/supabase.middleware";
import { runMiddlewares } from "app/middlewares/utils.middleware";

import "config/env.config";

export const path = "/api";

export async function middleware(req: NextRequest) {
  const common = commonMiddleware(req);
  const supabase = supabaseMiddleware(req);
  const cors = corsMiddleware(req, { allowOrigin: "*" });

  // Order of middlewares is important - first to last
  const middlewares = [common(), supabase(), cors({ path })];
  return runMiddlewares(req, middlewares);
}
