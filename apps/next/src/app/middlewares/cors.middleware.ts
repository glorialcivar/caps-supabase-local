// Cors middleware
import { NextRequest, NextResponse } from "next/server";

import { handleMiddleware } from "./utils.middleware";

type CorsMiddlewareOptions = { allowOrigin: string };

export const corsMiddleware = (
  req: NextRequest,
  options: CorsMiddlewareOptions
) => {
  const { allowOrigin } = options;
  return handleMiddleware(req, async (req, res) => {
    res.headers.set("Access-Control-Allow-Origin", allowOrigin);
    const accessControlAllowMethods = "GET, POST, PUT, DELETE, OPTIONS";
    res.headers.set("Access-Control-Allow-Methods", accessControlAllowMethods);
    const accessControlAllowHeaders = "Content-Type, Authorization";
    res.headers.set("Access-Control-Allow-Headers", accessControlAllowHeaders);
    // Preflight request should always return 200
    if (req.method === "OPTIONS") {
      return NextResponse.json({}, { headers: res.headers, status: 200 });
    }
    return res;
  });
};
