import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useBodyScroll } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseBodyScrollDemo() {
	const [hasScroll, setHasScroll] = useBodyScroll();
	return (
		<pre>
			<p>Has scroll: {hasScroll}</p>
			<p>Body overflow: {getComputedStyle(document.body).overflowY}</p>
			<ButtonGroup sx={{ mt: 1 }}>
				<Button onClick={() => setHasScroll(true)}>Enable</Button>
				<Button onClick={() => setHasScroll(false)}>Disable</Button>
			</ButtonGroup>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseBodyScrollDemo));
