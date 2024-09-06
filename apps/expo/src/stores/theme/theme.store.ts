// Theme store
import EStyleSheet from "react-native-extended-stylesheet";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { defaultValues } from "./theme.store.helpers";
import { ThemeStoreValues, ThemeTypes } from "./theme.store.types";
import themes from "styles/theme";

export const useThemeStore = create<ThemeStoreValues>()(
  devtools(
    (set, get) => {
      const values: ThemeStoreValues = {
        ...defaultValues,
        setTheme: (themeName: ThemeTypes) => {
          const theme = themes[themeName];
          EStyleSheet.build(theme);
          set({ themeName, theme }, false, {
            type: "setBillingFormValues",
            themeName
          });
        },
        reset: () => set({ ...defaultValues })
      };
      return values;
    },
    { name: "Theme store" }
  )
);
