// Interfaces and types from component Button
import { ReactNode } from "react";
import { ButtonProps as RNButtonProps } from "react-native";
import { ViewStyle, StyleProp, TextStyle } from "react-native";

// Component Props
export interface ButtonProps extends Omit<RNButtonProps, "title"> {
  mode?: ButtonModes;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children?: ReactNode;
}

// Styled Component Props
export interface ButtonStyledProps {
  buttonMode: ButtonModes;
}

export type ButtonModes = "PRIMARY" | "SECONDARY";
