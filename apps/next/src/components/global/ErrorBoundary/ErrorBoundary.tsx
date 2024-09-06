import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { ErrorBoundaryProp as Props } from "./ErrorBoundary.types";
import MessageBoundary from "../MessageBoundary/MessageBoundary";

const defaultDescription =
  "Intenta volver más tarde para poder visualizar tus productos favoritos";

const ErrorBoundary = (props: Props) => {
  const { className, error, reset, title = "Ocurrió un error" } = props;
  const { buttonText = "Volver a intentar", onClick = () => reset() } = props;
  const { description = defaultDescription } = props;

  useEffect(() => {
    // TODO: send to logger
    console.error(error);
  }, [error]);

  return (
    <MessageBoundary
      className={twMerge("ErrorBoundary", className)}
      title={title}
      description={description}
      buttonText={buttonText}
      // Attempt to recover by trying to re-render the segment
      onClick={onClick}
    />
  );
};

export default ErrorBoundary;
