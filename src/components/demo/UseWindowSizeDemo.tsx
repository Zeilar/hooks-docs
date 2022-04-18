import { useWindowSize } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseWindowSizeDemo() {
	const { width, height } = useWindowSize();
	return (
		<pre>
			Window size: {width}x{height}
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseWindowSizeDemo));
