import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useBodyScroll } from "@zeilar/hooks";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseWindowSizeDemo() {
	const [hasScroll, setHasScroll] = useBodyScroll();
	return (
		<pre>
			Has scroll: {hasScroll}
			Body overflow: {getComputedStyle(document.body).overflowY}
			<ButtonGroup>
				<Button onClick={() => setHasScroll(true)}>Enable</Button>
				<Button onClick={() => setHasScroll(false)}>Disable</Button>
			</ButtonGroup>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseWindowSizeDemo));
