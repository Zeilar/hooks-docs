import TextField from "@mui/material/TextField";
import { useTitle } from "@zeilar/hooks";
import React, { useState } from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseWindowSizeDemo() {
	const [title, setTitle] = useState("");
	useTitle(title);
	return (
		<pre>
			<TextField
				value={title}
				onChange={e => setTitle(e.target.value)}
				label="Title"
				name="title"
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseWindowSizeDemo));
