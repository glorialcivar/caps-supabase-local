// i18n utility functions and data

export const getFirebaseAuthErrorMessage = (error?: {
  code: string;
  message: string;
}) => {
  const { code, message = "" } = error ?? {};

  if (!code) return message;
  switch (code) {
    case "auth/wrong-password":
      return "Los datos son inválidos";
    case "auth/user-not-found":
      return "No existe un registro de usuario con el correspondiente identificador provisto";
    case "auth/too-many-requests":
      return "Demasiadas solicitudes. El acceso a esta cuenta se ha inhabilitado temporalmente";
    case "auth/email-already-in-use":
      return "El correo electrónico provisto ya está en uso";
    case "auth/network-request-failed":
      return "Ha ocurrido un error de conexión, intenta nuevamente";
    case "auth/operation-not-allowed":
      return "El proveedor está deshabilitado en tu proyecto de firebase";
    case "auth/invalid-action-code":
      return "El link usado es inválido";
    case "auth/account-exists-with-different-credential":
      return "Ya existe una cuenta con la misma dirección de correo electrónico pero con credenciales de inicio de sesión diferentes";
    case "auth/user-disabled":
      return "Su cuenta ha sido deshabilitada";
    case "auth/weak-password":
      return "Contraseña débil";
    case "auth/invalid-email":
      return "Ingresa un correo electrónico válido";
    case "auth/provider-already-linked":
      return "Tu cuenta ya se encuentra vinculada";
    case "auth/invalid-verification-code":
      return "El código ingresado es inválido";
    case "auth/credential-already-in-use":
      return "Estas credenciales ya están en uso";
    case "auth/cancelled-popup-request":
      return "La solicitud de inicio de sesión emergente se canceló";
    case "auth/popup-closed-by-user":
      return "La solicitud de inicio de sesión emergente se cerró antes de completarse";
    default:
      return message;
  }
};
