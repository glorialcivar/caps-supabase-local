// Common middleware
import { NextRequest } from "next/server";

import { handleMiddleware } from "./utils.middleware";

export const commonMiddleware = (req: NextRequest) => {
  return handleMiddleware(req, async (req, res) => {
    const { nextUrl } = req;
    const { pathname, search } = nextUrl;
    const isFromAdmin = search.includes("admin=true");
    // Enhance response with additional headers
    // Store current request url in a custom header, which you can read later
    res.headers.set("x-pathname", pathname);
    res.headers.set("x-url", req.url);
    if (pathname === "/api/v1/advertisements" && !isFromAdmin) {
      res.headers.set(
        "Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=59"
      );
    }
    return res;
  });
};
