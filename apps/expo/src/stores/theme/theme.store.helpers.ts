// Theme store helper functions and data
import { StoreInitialValues } from "@simple/stores";

import { ThemeStoreValues } from "./theme.store.types";
import themes from "styles/theme";

export const defaultTheme = themes.light;

export const defaultValues: StoreInitialValues<ThemeStoreValues> = {
  theme: defaultTheme,
  themeName: "light"
};
