// Project constants
import { CONSTANTS as SHARED_CONSTANTS } from "@simple/utils";
import { Platform } from "react-native";

const CONSTANTS = {
  ...SHARED_CONSTANTS,
  // General settings
  GENERAL: {
    ...SHARED_CONSTANTS.GENERAL,
    // Platform running the application
    PLATFORM: Platform.OS
  },
  API: {
    ...SHARED_CONSTANTS.API
  },
  FEATURE_FLAGS: {
    ...SHARED_CONSTANTS.FEATURE_FLAGS
  },
  STORAGE: {
    ...SHARED_CONSTANTS.STORAGE
  },
  // App version code. Used to control mandatory updates
  VERSION_CODE: 1
};

export default CONSTANTS;
