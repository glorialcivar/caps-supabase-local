// ErrorBoundary types and interfaces

import { MessageBoundaryProps } from "../MessageBoundary/MessageBoundary.types";
import { ErrorProps } from "app/types";

// Component Props
export type ErrorBoundaryProp = {
  className?: string;
} & Partial<MessageBoundaryProps> &
  ErrorProps;
