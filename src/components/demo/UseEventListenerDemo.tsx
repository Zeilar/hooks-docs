import Button from "@mui/material/Button";
import { useEventListener } from "@zeilar/hooks";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseDisclosureDemo() {
	const ref = useEventListener<HTMLButtonElement>("click", () => alert("🎉"));
	return (
		<pre>
			<Button ref={ref}>Click me</Button>
		</pre>
	);
}

export default withThemeProvider(UseDisclosureDemo);
