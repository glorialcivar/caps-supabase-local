import { lighten } from "polished";

import defaultTheme from "./default";

const { $palette, ...rest } = defaultTheme;
const palette = { ...$palette };
palette.primary = "hsla(0, 0%, 0%, 1)";
palette.primaryLight = lighten(0.3, palette.primary);

const theme = { ...rest, $palette: palette };

export default theme;
