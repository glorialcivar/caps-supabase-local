import { appleAuth } from "@invertase/react-native-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { updateUser } from "@simple/services";
import { useMemo } from "react";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

import { UseAuthValues } from "./useAuth.types";
import CONSTANTS from "config/constants";
import { t } from "i18n/i18n";
import { useAuthStore } from "stores/auth/auth.store";
import { getFirebaseAuthError, getGoogleAuthError } from "utils/auth.utils";
import { getAppleAuthError, getFacebookAuthError } from "utils/auth.utils";

const { STORAGE, APP } = CONSTANTS;
const { MAGIC_LINK_EMAIL, SSO_USER_TOKEN } = STORAGE;
const { BUNDLE_ID } = APP;

// Auth custom hook functions
const useAuth = (): UseAuthValues => {
  const setStatus = useAuthStore(state => state.setStatus);
  const setUid = useAuthStore(state => state.setUid);

  const setUserInLocalStorage = (
    userCredentials: FirebaseAuthTypes.UserCredential
  ) => {
    const { additionalUserInfo, user } = userCredentials;
    const { phoneNumber: phone } = user ?? {};
    const { profile } = additionalUserInfo ?? {};
    const { given_name, family_name, first_name, last_name } = profile ?? {};
    const name = given_name ?? first_name;
    const lastName = family_name ?? last_name;
    const phoneNumber = phone ?? "";
    AsyncStorage.setItem(
      SSO_USER_TOKEN,
      JSON.stringify({ name, lastName, phoneNumber })
    );
  };

  const signInAnonymously = async () => {
    try {
      return await auth().signInAnonymously();
    } catch (error) {
      throw new Error(getFirebaseAuthError(error));
    }
  };

  return useMemo(
    () => ({
      isSignInWithEmailLink: (emailLink: string) => {
        try {
          return auth().isSignInWithEmailLink(emailLink);
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      registerWithEmailAndPassword: async (email: string, password: string) => {
        try {
          return await auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      sendPasswordResetEmail: async (email: string) => {
        try {
          return await auth().sendPasswordResetEmail(email);
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      sendSignInLinkToEmail: async (email: string) => {
        try {
          AsyncStorage.setItem(MAGIC_LINK_EMAIL, email);
          return await auth().sendSignInLinkToEmail(email, {
            // Create a firebase magic link
            url: "https://www.CHANGEME.com.ec/magic-link",
            handleCodeInApp: true,
            iOS: { bundleId: BUNDLE_ID },
            android: { packageName: BUNDLE_ID, installApp: true }
          });
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      signInAnonymously,
      signInWithApple: async () => {
        let identityToken: string | null;
        let nonce: string | null;
        try {
          const response = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
          });
          identityToken = response.identityToken;
          nonce = response.nonce;
          const { givenName, familyName } = response.fullName ?? {};
          AsyncStorage.setItem(
            SSO_USER_TOKEN,
            JSON.stringify({
              name: givenName,
              lastName: familyName,
              phoneNumber: ""
            })
          );
        } catch (error) {
          throw new Error(getAppleAuthError(error));
        }
        if (!identityToken) throw new Error(t("errors.apple.token"));
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce
        );
        if (!appleCredential) return appleCredential;
        try {
          const response = await auth().signInWithCredential(appleCredential);
          return response;
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      signInWithEmailAndPassword: async (email: string, password: string) => {
        try {
          return await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      signInWithEmailLink: async (email: string, emailLink: string) => {
        try {
          return await auth().signInWithEmailLink(email, emailLink);
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      signInWithFacebook: async () => {
        let accessToken: string | undefined;
        try {
          const { isCancelled } = await LoginManager.logInWithPermissions([
            "public_profile",
            "email"
          ]);
          if (isCancelled) throw new Error(t("errors.facebook.cancel"));
          const data = await AccessToken.getCurrentAccessToken();
          accessToken = data?.accessToken;
        } catch (error) {
          throw new Error(getFacebookAuthError(error));
        }
        if (!accessToken) throw new Error(t("errors.facebook.token"));
        const facebookCredential =
          auth.FacebookAuthProvider.credential(accessToken);
        if (!facebookCredential) return facebookCredential;
        try {
          const response = await auth().signInWithCredential(
            facebookCredential
          );
          setUserInLocalStorage(response);
          return response;
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      signInWithGoogle: async () => {
        let idToken: string | null;
        try {
          await GoogleSignin.hasPlayServices();
          const googleUser = await GoogleSignin.signIn();
          idToken = googleUser.idToken;
        } catch (error) {
          throw new Error(getGoogleAuthError(error));
        }
        if (!idToken) throw new Error(t("errors.google.token"));
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        if (!googleCredentials) return googleCredentials;
        try {
          const response = await auth().signInWithCredential(googleCredentials);
          setUserInLocalStorage(response);
          return response;
        } catch (error) {
          throw new Error(getFirebaseAuthError(error));
        }
      },
      listenAuthState: () =>
        auth().onAuthStateChanged(
          async (user: FirebaseAuthTypes.User | null) => {
            updateUser(user);
            const { uid, isAnonymous } = user ?? {};
            setStatus(isAnonymous ? "ANONYMOUS" : "REGISTERED");
            setUid(uid);
            if (uid) return;
            try {
              await signInAnonymously();
            } catch (e) {
              console.warn(e.message);
            }
          }
        )
    }),
    [setStatus, setUid]
  );
};

export default useAuth;
