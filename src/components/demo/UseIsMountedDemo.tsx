import { useIsMounted } from "use-ful-hooks-ts";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseIsMountedDemo() {
	const isMounted = useIsMounted();
	return <pre>{String(isMounted())}</pre>;
}

export default withThemeProvider(UseIsMountedDemo);
