import TextField from "@mui/material/TextField";
import { useStorage } from "@zeilar/hooks";
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
				size="small"
				label="useLocalStorage"
				value={localData}
				onChange={e => setLocalData(e.target.value)}
				variant="outlined"
				name="value"
				autoFocus
			/>
			<TextField
				sx={{ ml: 1 }}
				size="small"
				label="useSessionStorage"
				value={sessionData}
				onChange={e => setSessionData(e.target.value)}
				name="value"
				variant="outlined"
			/>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseStorageDemo));
