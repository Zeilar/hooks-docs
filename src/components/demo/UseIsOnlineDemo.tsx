import { useIsOnline } from "use-ful-hooks-ts";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";
import { withBrowserOnly } from "../withBrowserOnly";

function UseIsOnlineDemo() {
	const isOnline = useIsOnline();
	return <pre>{String(isOnline)}</pre>;
}

export default withThemeProvider(withBrowserOnly(UseIsOnlineDemo));
