import "server-only";

import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

import { queryClientConfig } from "./query.config";

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));
