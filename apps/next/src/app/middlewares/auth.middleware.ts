// Auth middleware
import { NextRequest } from "next/server";

import { handleMiddleware } from "./utils.middleware";
import { Response } from "utils/http.utils";

export const authMiddleware = (req: NextRequest) => {
  return handleMiddleware(req, async (req, res) => {
    // Check if bearer token is present
    const authorization = req.headers.get("authorization");
    if (!authorization) {
      const details = "Missing bearer token";
      return Response.badRequest({ details });
    }
    // Check if bearer token format is valid
    const [, token] = authorization.split(" ");
    if (!token) {
      const details = "Invalid bearer token";
      return Response.badRequest({ details });
    }
    try {
      // Check if access token is valid
      res.headers.set("x-channel-id", "33");
      // All good, continue
      return res;
    } catch (e) {
      let details = "Invalid access token";
      if (e.name === "JWTExpired") details = "Access token expired";
      return Response.unauthorized({ details });
    }
  });
};
