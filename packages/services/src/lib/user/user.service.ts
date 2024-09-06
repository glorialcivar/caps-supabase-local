// User services
import { User } from "@simple/types";

import { DeleteUserPayload, ExtendedBaseUser } from "./user.service.types";
import { PutUserPasswordPayload } from "./user.service.types";
import { buildHeaders } from "../../utils/services.utils";
import { getState } from "../state";

const baseUrl = "api/v2/users";

/**
 * Fetches the user's data of the signed in user.
 *
 * @returns {User} The user data
 */
export const fetchUser = async (): Promise<User> => {
  const { shouldMock, axiosDefault } = getState();
  try {
    if (!shouldMock) {
      const promise = axiosDefault.get(baseUrl, {
        params: {
          countryId: 1
        },
        headers: await buildHeaders()
      });
      const { data } = await promise;
      return data;
    } else {
      const { mockUser } = await import("./user.service.mock");
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          mockUser(resolve, reject);
        }, 1000);
      });
    }
  } catch (e) {
    const noUserFound = e?.response?.data;
    if (
      noUserFound?.status === 404 &&
      noUserFound?.error.includes("No user for uid:")
    ) {
      throw new Error("No user for uid");
    }
    throw new Error(e.message);
  }
};

/**
 * Creates a new user.
 *
 * @param {BaseUser} user The user partial data to be stored
 * @returns {User} The created user
 */
export const postUser = async (user: ExtendedBaseUser): Promise<User> => {
  const { shouldMock, axiosDefault } = getState();
  if (!shouldMock) {
    const { data } = await axiosDefault.post(baseUrl, user, {
      headers: await buildHeaders()
    });

    return data;
  } else {
    const { mockPostUser } = await import("./user.service.mock");
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockPostUser(user));
      }, 1000);
    });
  }
};

/**
 * Updates the user data properties.
 *
 * @param {User} user A subset of the user fields
 * @returns {User} The updated user
 */
export const putUser = async (user: Partial<User>): Promise<User> => {
  const { shouldMock, axiosDefault } = getState();
  try {
    if (!shouldMock) {
      const { data } = await axiosDefault.put(baseUrl, user, {
        headers: await buildHeaders()
      });
      return data;
    } else {
      const { mockPutUser } = await import("./user.service.mock");
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mockPutUser(user));
        }, 1000);
      });
    }
  } catch (e) {
    const { value: message = e.message } = e.response?.data?.warning?.[0] ?? {};
    throw new Error(message);
  }
};

/**
 * Updates the user's password.
 *
 * @param {PutUserPasswordPayload} payload The data needed to update the password
 */
export const putUserPassword = async (
  payload: PutUserPasswordPayload
): Promise<void> => {
  const { shouldMock, axiosDefault } = getState();
  try {
    if (!shouldMock) {
      return await axiosDefault.post(`${baseUrl}/changePassword`, payload, {
        headers: await buildHeaders()
      });
    } else {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

/**
 * Deletes the current user account
 *
 * @param {DeleteUserPayload} payload The data needed to delete the user
 */
export const deleteUser = async (payload: DeleteUserPayload) => {
  const { shouldMock, axiosDefault } = getState();
  try {
    if (!shouldMock) {
      return await axiosDefault.delete(`${baseUrl}/unsubscribe`, {
        headers: await buildHeaders()
      });
    } else {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
