import { useIsOnline } from "@zeilar/hooks";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseIsOnlineDemo() {
	const isOnline = useIsOnline();
	return <pre>{String(isOnline)}</pre>;
}

export default withThemeProvider(UseIsOnlineDemo);
