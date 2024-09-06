// MessageBoundary types and interfaces

import { ReactNode } from "react";

export interface MessageBoundaryCommonProps {
  className?: string;
  title: string;
  description: string;
}

export interface MessageBoundaryProps1 extends MessageBoundaryCommonProps {
  buttonText: string;
  onClick: () => void;
  button?: never;
}

export interface MessageBoundaryProps2 extends MessageBoundaryCommonProps {
  button: ReactNode;
  buttonText?: never;
  onClick?: never;
}

export type MessageBoundaryProps =
  | MessageBoundaryProps1
  | MessageBoundaryProps2;
