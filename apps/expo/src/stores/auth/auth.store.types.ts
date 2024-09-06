// Auth store types
import { StoreSetState } from "@simple/stores";

export type AuthStoreValues = {
  status: "UNKNOWN" | "ANONYMOUS" | "REGISTERED";
  setStatus: StoreSetState<"UNKNOWN" | "ANONYMOUS" | "REGISTERED">;
  uid: string | undefined;
  setUid: StoreSetState<string | undefined>;
  reset: () => void;
};
