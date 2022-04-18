import TextField from "@mui/material/TextField";
import { useLocalStorage } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseLocalStorageDemo() {
	const [data, setData] = useLocalStorage<string>(
		"useLocalStorage",
		"Hello world"
	);
	return (
		<pre>
			<TextField
				label="Value"
				value={data}
				onChange={e => setData(e.target.value)}
				variant="outlined"
				name="value"
				autoFocus
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseLocalStorageDemo));
