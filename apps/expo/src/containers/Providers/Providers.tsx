import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useRef } from "react";

import { ProvidersProps as Props } from "./Providers.types";

const Providers: React.FC<Props> = props => {
  const { children } = props;
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: process.env.ENV === "production",
          staleTime: 15 * 1000 * 60
        }
      }
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
