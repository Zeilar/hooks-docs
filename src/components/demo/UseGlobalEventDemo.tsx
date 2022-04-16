import { useGlobalEvent } from "@zeilar/hooks";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseGlobalEvent() {
	const [key, setKey] = useState<string>();
	useGlobalEvent("keydown", e => setKey(e.key));
	return <pre>{key ?? "No key pressed."}</pre>;
}

export default withThemeProvider(UseGlobalEvent);
