import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = props => {
  const { viewStyle, textStyle, onPress, mode = "PRIMARY", ...rest } = props;
  const isPrimary = mode === "PRIMARY";
  const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
  const textButtonStyle = isPrimary ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View style={[styles.button, buttonStyle, viewStyle]}>
        <Text style={[styles.textButton, textButtonStyle, textStyle]}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
