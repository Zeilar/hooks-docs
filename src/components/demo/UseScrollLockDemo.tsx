import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useScrollLock } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseScrollLockDemo() {
	const [isScrollable, setIsScrollable] = useScrollLock();
	return (
		<pre>
			<p>Has scroll: {String(isScrollable)}</p>
			<p>Body overflow: {getComputedStyle(document.body).overflowY}</p>
			<ButtonGroup>
				<Button onClick={() => setIsScrollable(true)}>Unlock</Button>
				<Button onClick={() => setIsScrollable(false)}>Lock</Button>
			</ButtonGroup>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseScrollLockDemo));
