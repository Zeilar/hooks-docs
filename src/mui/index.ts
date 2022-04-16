import { createTheme } from "@mui/material/styles";
import * as components from "./components";
import { palette } from "./palette";

const theme = createTheme({
	components,
	palette,
});

export default theme;
