import { useIsMounted } from "@zeilar/hooks";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseIsMountedDemo() {
	const isMounted = useIsMounted();
	return <pre>{String(isMounted())}</pre>;
}

export default withThemeProvider(UseIsMountedDemo);
