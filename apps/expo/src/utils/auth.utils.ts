import { appleAuth } from "@invertase/react-native-apple-authentication";
import { statusCodes } from "@react-native-google-signin/google-signin";

import { t } from "i18n/i18n";

export const getGoogleAuthError = (error: any) => {
  const { code, message } = error ?? {};
  if (!code) return message;
  switch (code) {
    case statusCodes.SIGN_IN_CANCELLED:
      return t("errors.google.canceled");
    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
      return t("errors.google.playServicesNotAvailable");
    case statusCodes.IN_PROGRESS:
      return t("errors.google.inProgress");
    case statusCodes.SIGN_IN_REQUIRED:
      return t("errors.google.signInRequired");
    default:
      return message;
  }
};

export const getFacebookAuthError = (error: any) => {
  const { message } = error ?? {};
  return message;
};

export const getAppleAuthError = (error: any) => {
  const { code, message } = error ?? {};
  if (!code) return message;
  switch (code) {
    case appleAuth.Error.CANCELED:
      return t("errors.apple.canceled");
    case appleAuth.Error.FAILED:
      return t("errors.apple.failed");
    case appleAuth.Error.INVALID_RESPONSE:
      return t("errors.apple.invalid");
    case appleAuth.Error.NOT_HANDLED:
      return t("errors.apple.notHandled");
    case appleAuth.Error.UNKNOWN:
      return t("errors.apple.unknown");
    default:
      return t("errors.generic");
  }
};

export const getFirebaseAuthError = (error: any) => {
  const { code, message } = error ?? {};
  if (!code) return message;
  switch (code) {
    case "auth/wrong-password":
      return t("errors.firebase.auth.wrongPassword");
    case "auth/user-not-found":
      return t("errors.firebase.auth.userNotFound");
    case "auth/too-many-requests":
      return t("errors.firebase.auth.tooManyRequests");
    case "auth/email-already-in-use":
      return t("errors.firebase.auth.emailAlreadyInUse");
    case "auth/network-request-failed":
      return t("errors.firebase.auth.networkRequestFailed");
    case "auth/operation-not-allowed":
      return t("errors.firebase.auth.operationNorAllowed");
    case "auth/invalid-action-code":
      return t("errors.firebase.auth.invalidActionCode");
    case "auth/account-exists-with-different-credential":
      return t("errors.firebase.auth.accountExistsWithDifferentCredential");
    default:
      return message;
  }
};
