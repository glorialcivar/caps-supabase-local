import { setState } from "../lib/state";

/**
 * Updates the user from which the token will be taken.
 *
 * @param user Current firebase user
 */
export const updateUser = (user?: any) => {
  setState({ user });
};
