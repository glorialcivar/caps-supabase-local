import { utils } from "@artisan-commerce/builders";
import { CommonResponse, ContactFormNotification } from "@simple/types";

const { genNumericId, genId, genWord, genEmail } = utils;
const { genDocument, genMobilPhone } = utils;

export const buildCommonResponse = (
  data: any,
  overrides?: CommonResponse<any>
) => {
  return {
    code: 200,
    status: "success",
    message: "ok",
    data: data,
    warning: null,
    error: null,
    ...overrides
  };
};

export const buildContactFormNotification = (
  overrides: Partial<ContactFormNotification> = {}
): ContactFormNotification => {
  return {
    id: genId(),
    uid: genId(),
    email: genEmail(),
    userInfo: {
      names: "Elon",
      lastNames: "Musk",
      document: genDocument(13),
      phone: genMobilPhone("593")
    },
    subject: genWord(),
    priorityId: genNumericId(),
    emailType: genId(),
    accountId: genNumericId(),
    countryId: genNumericId(),
    ...overrides
  };
};
