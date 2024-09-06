import "server-only";

import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

import { queryClientConfig } from "./query.config";

export const queryClient = cache(() => new QueryClient(queryClientConfig));
