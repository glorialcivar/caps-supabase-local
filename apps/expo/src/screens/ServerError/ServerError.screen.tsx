import React from "react";
import { View } from "react-native";

import styles from "./ServerError.screen.styles";
import { ServerErrorProps as Props } from "./ServerError.screen.types";
import Button from "components/global/Button/Button";
import { t } from "i18n/i18n";
import { useThemeStore } from "stores/theme/theme.store";

import ErrorSVG from "assets/images/serverError/server-error.svg";

const ServerError: React.FC<Props> = props => {
  const theme = useThemeStore(state => state.theme);
  const { resetError, navigation } = props;
  const { navigate } = navigation;

  const retry = () => {
    if (resetError) {
      resetError();
    } else {
      navigate("ServerError");
    }
  };

  return (
    <View style={styles.container}>
      <ErrorSVG
        style={styles.errorImage}
        fill={theme.$palette.primary}
        stroke={theme.$palette.primary}
      />
      <Button onPress={retry}>{t("retry")}</Button>
    </View>
  );
};

export default ServerError;
