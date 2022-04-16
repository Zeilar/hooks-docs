import theme from "@site/src/mui";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import React from "react";

export function withThemeProvider<T = any>(Component: React.FC<T>) {
	return (props: T) => {
		return (
			<ThemeProvider theme={theme}>
				<Component {...props} />
			</ThemeProvider>
		);
	};
}
