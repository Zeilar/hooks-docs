import Button from "@mui/material/Button";
import { useOnMount, useOnUnmount, useTimeout } from "use-ful-hooks-ts";
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
	const countdownIntervalRef = useRef<number>();

	function clearCountdown() {
		clear();
		clearInterval(countdownIntervalRef.current);
		setDone(true);
		setCountdown(0);
	}

	useOnMount(() => {
		const interval = window.setInterval(() => {
			setCountdown(countdown => countdown - 1000);
		}, 1000);
		countdownIntervalRef.current = interval;
	});

	useEffect(() => {
		if (countdown <= 0) {
			clearInterval(countdownIntervalRef.current);
		}
	}, [countdown]);

	useOnUnmount(() => {
		clearInterval(countdownIntervalRef.current);
	});

	return (
		<pre>
			<p>{done ? "Done" : countdown / 1000}</p>
			<Button onClick={clearCountdown}>Clear</Button>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseTimeoutDemo));
