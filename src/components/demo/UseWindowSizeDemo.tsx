import { useWindowSize } from "@zeilar/hooks";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseWindowSizeDemo() {
	const windowSize = useWindowSize();
	return (
		<pre>
			Window size: {windowSize.x}x{windowSize.y}
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseWindowSizeDemo));
