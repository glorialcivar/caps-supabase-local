import { ApiWarning } from "@simple/types";

export const mapAPIErrors = (warnings: ApiWarning[] | undefined): string[] => {
  if (!warnings) return [];
  return warnings.map(warning => warning.value);
};

export const getFirebaseAuthErrorMessage = (code?: string) => {
  switch (code) {
    case "auth/wrong-password":
      return "Los datos son inválidos";
    case "auth/user-not-found":
      return "El correo no está registrado";
    case "auth/too-many-requests":
      return "Demasiadas solicitudes. El acceso a esta cuenta se ha inhabilitado temporalmente";
    case "auth/email-already-in-use":
      return "Esta cuenta ya existe, inicia sesión";
    case "auth/network-request-failed":
      return "Ha ocurrido un error de conexión, intenta nuevamente";
    default:
      return "";
  }
};
