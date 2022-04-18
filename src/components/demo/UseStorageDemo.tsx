import TextField from "@mui/material/TextField";
import { useStorage } from "use-ful-hooks-ts";
import React from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

function UseStorageDemo() {
	const [localData, setLocalData] = useStorage<string>(
		localStorage,
		"useLocalStorage",
		"Hello world"
	);
	const [sessionData, setSessionData] = useStorage<string>(
		sessionStorage,
		"useSessionStorage",
		"Hello world"
	);
	return (
		<pre>
			<TextField
				label="useLocalStorage"
				value={localData}
				onChange={e => setLocalData(e.target.value)}
				name="value"
				autoFocus
			/>
			<TextField
				sx={{ ml: 1 }}
				label="useSessionStorage"
				value={sessionData}
				onChange={e => setSessionData(e.target.value)}
				name="value"
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseStorageDemo));
