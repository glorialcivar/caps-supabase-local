// Checkout store types
import { StoreSetState } from "@simple/stores";
import { PaymentStatusPlaceToPay, PlaceOrderStep } from "@simple/types";
import { BillingFormValues } from "@simple/types";
import { UserFormValues } from "@simple/types";
import { DocumentType, Order } from "artisn-rn/types";

export type CheckoutStoreValues = {
  userFormValues: UserValues | undefined;
  setUserFormValues: StoreSetState<UserValues | undefined>;
  billingFormValues: BillingValues | undefined;
  setBillingFormValues: StoreSetState<BillingValues | undefined>;
  sameBilling: boolean;
  setSameBilling: StoreSetState<boolean>;
  step: PlaceOrderStep | undefined;
  setStep: StoreSetState<PlaceOrderStep | undefined>;
  status: PaymentStatusPlaceToPay | undefined;
  setStatus: StoreSetState<PaymentStatusPlaceToPay | undefined>;
  placedOrder: Order | undefined;
  setPlacedOrder: StoreSetState<Order | undefined>;
  areTermsAccepted: boolean;
  setAreTermsAccepted: StoreSetState<boolean>;
  transferAnonymousId: string | undefined;
  setTransferAnonymousId: StoreSetState<string | undefined>;
  resetRejectedOrder: () => void;
  reset: () => void;
};

export interface UserValues extends Omit<UserFormValues, "documentType"> {
  documentType: DocumentType;
}

export interface BillingValues extends Omit<BillingFormValues, "documentType"> {
  documentType: DocumentType;
}
