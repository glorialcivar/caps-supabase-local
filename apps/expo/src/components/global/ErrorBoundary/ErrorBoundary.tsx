import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import ErrorBoundaryLib from "react-native-error-boundary";

import { ErrorBoundaryProps as Props } from "./ErrorBoundary.types";
import ServerError from "screens/ServerError/ServerError.screen";
import { ServerErrorNavigation } from "screens/ServerError/ServerError.screen.types";
import { ServerErrorRoute } from "screens/ServerError/ServerError.screen.types";

const ErrorBoundary: React.FC<Props> = props => {
  const navigation = useNavigation<ServerErrorNavigation>();
  const route = useRoute<ServerErrorRoute>();
  type FallbackProps = { error: Error; resetError: () => void };
  const Fallback = (props: FallbackProps) => (
    <ServerError {...props} navigation={navigation} route={route} />
  );
  return (
    <ErrorBoundaryLib
      FallbackComponent={Fallback}
      onError={error => console.log("sdfjsldfjsf", error)}
    >
      {props.children}
    </ErrorBoundaryLib>
  );
};

ErrorBoundary.defaultProps = {};

export default ErrorBoundary;
