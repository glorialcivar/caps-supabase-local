// Project constants
import { CONSTANTS as SHARED_CONSTANTS } from "@simple/utils";

const CONSTANTS = {
  ...SHARED_CONSTANTS,
  // General settings
  GENERAL: {
    ...SHARED_CONSTANTS.GENERAL,
    // Platform running the application
    PLATFORM: "web"
  }
};

export default CONSTANTS;
