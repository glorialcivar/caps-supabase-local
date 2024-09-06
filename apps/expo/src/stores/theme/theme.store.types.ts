// Theme store types
import themes from "styles/theme";
import light from "styles/theme/default";

export type ThemeTypes = keyof typeof themes;

export type Theme = typeof light;

export type ThemeStoreValues = {
  theme: Theme;
  setTheme: (themeName: ThemeTypes) => void;
  themeName: ThemeTypes;
  reset: () => void;
};
