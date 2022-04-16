import { useAsync, useOnUnmount } from "@zeilar/hooks";
import React, { useMemo, useRef, useState } from "react";
import { withThemeProvider } from "../withThemeProvider";
import Button from "@mui/material/Button";
import { withBrowserOnly } from "../withBrowserOnly";

interface Result {
	message: string;
}

function UseAsyncDemo() {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef<number>();

	const memoizedPromise = useMemo(
		() =>
			new Promise<Result>((resolve, reject) => {
				const timeout = window.setTimeout(() => {
					Math.random() < 0.5
						? resolve({ message: "Hello world 👋" })
						: reject(new Error("Whoops 💥"));
				}, 1000);
				timeoutRef.current = timeout;
			}),
		[index]
	);

	useOnUnmount(() => {
		clearTimeout(timeoutRef.current);
	});

	const { error, loading, result } = useAsync<Result, Error>(memoizedPromise);

	return (
		<pre>
			{loading && <p>Loading... ⌛</p>}
			{error && <p>{error.message}</p>}
			{result && <p>{result.message}</p>}
			<Button onClick={() => setIndex(p => p + 1)}>Reload</Button>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseAsyncDemo));
