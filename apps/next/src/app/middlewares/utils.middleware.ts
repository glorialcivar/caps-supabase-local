// Middleware utility functions
import { NextRequest, NextResponse } from "next/server";

import { HandleMiddlewareFn, MiddlewareFn } from "./middleware.types";

// Orchestrates all middlewares
export const runMiddlewares = async (
  req: NextRequest,
  middlewares: MiddlewareFn[]
) => {
  let res = NextResponse.next();
  for (const middleware of middlewares) {
    res = await middleware(req, res);
    if (!res.ok) break;
  }
  return res;
};

// Wrapper for individual middleware definitions
export const handleMiddleware: HandleMiddlewareFn = (req, fn) => options => {
  const { path = "/", method = "*", blacklist = [] } = options ?? {};
  const pathname = req.nextUrl.pathname;
  const validMethod = method === "*" || req.method === method;
  const validPath = pathname.startsWith(path);
  const blacklistedPath = blacklist.some(path => pathname.startsWith(path));
  // Filter out invalid middlewares
  if (!validMethod || !validPath || blacklistedPath) return noopMiddleware;
  return fn;
};

// No-operations middleware
const noopMiddleware: MiddlewareFn = async (req, res) => res;
