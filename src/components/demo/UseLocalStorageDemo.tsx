import TextField from "@mui/material/TextField";
import { useLocalStorage } from "@zeilar/hooks";
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
				size="small"
				label="Value"
				value={data}
				onChange={e => setData(e.target.value)}
				variant="outlined"
				name="value"
				required
				autoFocus
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseLocalStorageDemo));
