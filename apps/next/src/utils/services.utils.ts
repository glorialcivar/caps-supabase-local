import CONSTANTS from "config/constants";

const { MOCK_SERVICES } = CONSTANTS.API;

// This value should not be modified if you want to disable mocks
// To disable mocks, go to config/constants.ts
export const shouldMock = MOCK_SERVICES;
// export const shouldMock =
//   process.env.ENV === "production" ? false : MOCK_SERVICES;
