import Switch from "@mui/material/Switch";
import { useTheme } from "@zeilar/hooks";
import React, { useEffect } from "react";
import { withThemeProvider } from "../withThemeProvider";
import { withBrowserOnly } from "../withBrowserOnly";

function UseThemeDemo() {
	const [theme, setTheme, toggleTheme] = useTheme("dark");

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return (
		<pre>
			<p>Theme: {theme}</p>
			<Switch checked={theme === "light"} onChange={toggleTheme} />
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseThemeDemo));
