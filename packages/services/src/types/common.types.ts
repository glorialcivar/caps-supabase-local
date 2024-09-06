// Common services types and interfaces
import { QueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface GlobalState {
  /** Artisn Rest API url */
  apiUrl: string;
  /** Vercel Rest API url */
  apiUrl3: string;
  /**
   * `defaultRequestTimeout` specifies the number of milliseconds before the
   * request times out. If the request takes longer than
   * `defaultRequestTimeout`, the request will be aborted.
   */
  defaultRequestTimeout?: number;
  /** Platform running the application */
  platform?: string;
  /** Project account identifier */
  accountId: number;
  /** `shouldMock` specifies whether services should return mocks */
  shouldMock: boolean;
  /**
   * `mockWithInitialUserData` specifies whether mocks will contain fixed user
   * data
   */
  mockWithInitialUserData?: boolean;
  /** The axios instance that will be used for the requests */
  axiosDefault: AxiosInstance;
  /** The axios instance that will be used for the requests */
  axiosDefaultSupa: AxiosInstance;
  /** `initialized` specifies whether services have already been initialized */
  initialized: boolean;
  /** Firebase user */
  user: any;
  /** React query client */
  queryClient: QueryClient | undefined;
}

export interface ServicesConfig
  extends Pick<
    GlobalState,
    "defaultRequestTimeout" | "shouldMock" | "mockWithInitialUserData"
  > {
  /** Platform running the application */
  platform: NonNullable<GlobalState["platform"]>;
  /** React query client */
  queryClient: NonNullable<GlobalState["queryClient"]>;
}

export interface AuthStatus {
  uid: string | undefined;
  isAnonymous: boolean | undefined;
}
