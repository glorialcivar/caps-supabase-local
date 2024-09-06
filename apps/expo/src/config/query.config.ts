import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.ENV === "production",
      staleTime: 15 * 1000 * 60
    }
  }
};

export const getQueryClient = () => new QueryClient(queryClientConfig);
