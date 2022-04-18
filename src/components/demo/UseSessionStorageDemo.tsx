import TextField from "@mui/material/TextField";
import { useSessionStorage } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseSessionStorageDemo() {
	const [data, setData] = useSessionStorage<string>(
		"useSessionStorage",
		"Hello world"
	);
	return (
		<pre>
			<TextField
				label="Value"
				value={data}
				onChange={e => setData(e.target.value)}
				name="value"
				autoFocus
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseSessionStorageDemo));
