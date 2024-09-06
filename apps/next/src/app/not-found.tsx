import React from "react";

import MessageBoundary from "components/global/MessageBoundary/MessageBoundary";

const NotFoundPage = () => {
  return (
    <MessageBoundary
      title="Página no encontrada"
      description="Lo sentimos no encontramos la página que estás buscando"
      button={
        <a href="/" className="w-full">
          <button className="mt-6 w-full !font-semibold">Ir a inicio</button>
        </a>
      }
    />
  );
};

export default NotFoundPage;
