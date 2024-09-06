"use client";
import { ErrorProps as Props } from "app/types";
import ErrorBoundary from "components/global/ErrorBoundary/ErrorBoundary";

const ErrorPage = (props: Props) => {
  return <ErrorBoundary {...props} />;
};

export default ErrorPage;
