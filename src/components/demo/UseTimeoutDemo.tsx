import Button from "@mui/material/Button";
import { useOnMount, useTimeout } from "@zeilar/hooks";
import React, { useEffect, useRef, useState } from "react";
import { withBrowserOnly } from "../withBrowserOnly";
import { withThemeProvider } from "../withThemeProvider";

const TIMER = 2000;

function UseTimeoutDemo() {
	const [done, setDone] = useState(false);
	const { clear, ref } = useTimeout(() => {
		setDone(true);
	}, TIMER);
	const [countdown, setCountdown] = useState(TIMER);
	const countdownRef = useRef<number>();

	function clearCountdown() {
		clear();
		clearTimeout(countdownRef.current);
		setDone(true);
		setCountdown(0);
	}

	useOnMount(() => {
		const timeout = window.setInterval(() => {
			setCountdown(countdown => countdown - 1000);
		}, 1000);
		countdownRef.current = timeout;
	});

	useEffect(() => {
		if (countdown <= 0) {
			clearTimeout(countdownRef.current);
		}
	}, [countdown]);

	return (
		<pre>
			<p>{done ? "Done" : countdown / 1000}</p>
			<Button onClick={clearCountdown}>Clear</Button>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseTimeoutDemo));
