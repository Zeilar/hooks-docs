import Button from "@mui/material/Button";
import { useEventListener } from "use-ful-hooks-ts";
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
