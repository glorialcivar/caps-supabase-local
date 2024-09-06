// Interfaces and types from component ScreenTemplate

import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

// Component Props
export interface ScreenTemplateProps {
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
  children?: ReactNode;
}

// Styled Component Props
export interface ScreenTemplateStyledProps {
  width: number;
  height: number;
}
