// User service hooks
import { BaseUser, User } from "@artisan-commerce/types";
import { ApiError } from "@simple/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { postUser, fetchUser, putUser, deleteUser } from "./user.service";
import { putUserPassword } from "./user.service";
import { DeleteUserPayload, ExtendedBaseUser } from "./user.service.types";
import { ExtendedUser } from "./user.service.types";
import { PutUserPasswordPayload } from "./user.service.types";
import { AuthStatus } from "../../types/common.types";

/** Hook to get user's information.
 *
 * @returns {UseQueryResult<User>} Returns a use query result with the user
 */
export const useFetchUser = (auth: AuthStatus) => {
  const { uid, isAnonymous } = auth;
  return useQuery<ExtendedUser, Error>([uid, "user"], () => fetchUser(), {
    enabled: !isAnonymous && !!uid,
    retry: 1,
    staleTime: 60 * 1000 * 60
  });
};

/** Hook to add user information.
 *
 * @returns Returns a use mutation result to add user information
 */
export const usePostUser = (auth: AuthStatus) => {
  const queryClient = useQueryClient();
  const { uid } = auth;

  return useMutation<User, AxiosError<ApiError>, ExtendedBaseUser>(postUser, {
    // When mutate is called:
    onMutate: async newUser => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([uid, "user"]);

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData<User>([uid, "user"]);

      // Optimistically update to the new value
      if (previousUser) {
        queryClient.setQueryData<User>([uid, "user"], {
          ...previousUser,
          ...newUser
        });
      }

      // Return a context object with the snapshotted value
      return previousUser;
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (errorData, newUser, previousUser) => {
      if (previousUser) {
        queryClient.setQueryData([uid, "user"], previousUser);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([uid, "user"]);
    }
  });
};

/** Hook to update user information.
 *
 * @returns Returns a use mutation result to update user information
 */
export const usePutUser = (auth: AuthStatus) => {
  const queryClient = useQueryClient();
  const { uid } = auth;

  return useMutation<User, AxiosError<ApiError>, BaseUser>(putUser, {
    // When mutate is called:
    onMutate: async newUser => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([uid, "user"]);

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData<User>([uid, "user"]);

      // Optimistically update to the new value
      if (previousUser) {
        queryClient.setQueryData<User>([uid, "user"], {
          ...previousUser,
          ...newUser
        });
      }

      // Return a context object with the snapshotted value
      return previousUser;
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (errorData, newUser, previousUser) => {
      if (previousUser) {
        queryClient.setQueryData([uid, "user"], previousUser);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([uid, "user"]);
    }
  });
};

/** Hook to update user password.
 *
 * @returns Returns a use mutation result to add user information
 */
export const usePutUserPassword = (auth: AuthStatus) => {
  const queryClient = useQueryClient();
  const { uid } = auth;

  return useMutation<void, Error, PutUserPasswordPayload>(putUserPassword, {
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([uid, "user"]);
    }
  });
};

/**
 * Hook to delete user account.
 *
 * @returns Returns a use mutation result to delete user information
 */
export const useDeleteUser = (auth: AuthStatus) => {
  const queryClient = useQueryClient();
  const { uid } = auth;

  return useMutation((payload: DeleteUserPayload) => deleteUser(payload), {
    onSettled: async () => {
      await queryClient.invalidateQueries([uid, "user"]);
    }
  });
};
