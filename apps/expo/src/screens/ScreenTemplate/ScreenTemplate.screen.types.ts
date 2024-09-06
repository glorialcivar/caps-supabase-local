// Interfaces and types from component ScreenTemplate

import { ReactNode } from "react";

// Component Props
export interface ScreenTemplateProps {
  scrollable?: boolean;
  children?: ReactNode;
}

// Styled Component Props
export interface ScreenTemplateStyledProps {
  width: number;
  height: number;
}
