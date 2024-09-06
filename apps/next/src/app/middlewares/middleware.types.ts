// Middleware types and interfaces

import { NextRequest, NextResponse } from "next/server";

export type Middleware = (options?: MiddlewareOptions) => MiddlewareFn;

export interface MiddlewareOptions {
  // Run if this path matches
  path?: string;
  // Run if this method matches
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "*";
  // Don't run if this path matches
  blacklist?: string[];
}

export type MiddlewareFn = (
  req: NextRequest,
  res: NextResponse
) => Promise<NextResponse>;

export type HandleMiddlewareFn = (
  req: NextRequest,
  fn: MiddlewareFn
) => Middleware;
