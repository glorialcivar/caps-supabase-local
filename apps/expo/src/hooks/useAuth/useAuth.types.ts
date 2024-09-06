// useAuth types and interfaces
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { UserCredential } from "firebase/auth";

export type Credentials = UserCredential;

export interface UseAuthValues {
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<FirebaseAuthTypes.UserCredential>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<FirebaseAuthTypes.UserCredential>;
  signInWithFacebook: () => Promise<FirebaseAuthTypes.UserCredential>;
  signInWithApple: () => Promise<FirebaseAuthTypes.UserCredential>;
  signInAnonymously: () => Promise<FirebaseAuthTypes.UserCredential>;
  sendSignInLinkToEmail: (email: string) => Promise<void>;
  signInWithEmailLink: (
    email: string,
    emailLink: string
  ) => Promise<FirebaseAuthTypes.UserCredential>;
  isSignInWithEmailLink: (emailLink: string) => boolean;
  registerWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<FirebaseAuthTypes.UserCredential>;
  listenAuthState: () => () => void;
}
