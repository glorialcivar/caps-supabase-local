// User services
import { userBuilders } from "@artisan-commerce/builders/dev";
import { User } from "@simple/types";

import { UserNotFoundError } from "./user.service.types";
import { getState } from "../state";

const { buildUser } = userBuilders;

// Useful for mocking first user creation
let userCreated: Partial<User>;

export const mockUser = (
  resolve: (value: User | PromiseLike<User>) => void,
  reject: (reason?: any) => void
) => {
  const { mockWithInitialUserData } = getState();
  if (mockWithInitialUserData || userCreated) {
    resolve(
      buildUser({
        name: "Elon",
        lastname: "Musk",
        documentType: "CI",
        document: "1701226479",
        email: "musking@spacex.me",
        phone: {
          number: "0983893532",
          countryCode: "+593",
          countryIsoCode: "EC"
        },
        additionalInfo: {
          photo: "http://cdn.onlinewebfonts.com/svg/img_569204.png"
        },
        privacyAcceptDate: "2023-10-17T13:22:35",
        ...userCreated
      })
    );
  } else {
    reject(mockUserNotFound());
  }
};

export const mockPostUser = (user: Partial<User>) => {
  userCreated = user;
  return buildUser({ ...user });
};

export const mockPutUser = (user: Partial<User>) => buildUser({ ...user });

export const mockUserNotFound = (): UserNotFoundError => {
  const { user } = getState();
  const { uid } = user ?? {};

  const message = `No user for uid: ${uid}`;
  const e = { name: "UserNotFound", message, stack: "" };
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(e);
  }
  return {
    ...e,
    response: {
      data: {
        status: 404,
        error: e.message
      }
    }
  };
};
