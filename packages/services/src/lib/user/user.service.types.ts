// User service interfaces and types
import { BaseUser } from "@artisan-commerce/types";
import { User } from "@simple/types";

export interface PutUserPasswordPayload {
  email: string;
  currentPassword: string;
  password: string;
  passwordRewrite: string;
}

export interface UserNotFoundError extends Error {
  response: UserNotFoundErrorResponse;
}

export interface UserNotFoundErrorResponse {
  data: UserNotFoundErrorData;
}

export interface UserNotFoundErrorData {
  status: number;
  error: string;
}

export interface DeleteUserPayload {}

export interface ExtendedUser extends User {}

export interface ExtendedBaseUser extends BaseUser {
  privacyAcceptDate?: string;
}
