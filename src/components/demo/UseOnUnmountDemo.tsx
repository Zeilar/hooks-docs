import Button from "@mui/material/Button";
import { useOnUnmount, useDisclosure } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";

interface ChildProps {
	increment(): void;
}

function Child({ increment }: ChildProps) {
	useOnUnmount(increment);
	return <span>Child</span>;
}

function UseOnUnmountDemo() {
	const childDisclosure = useDisclosure(true);
	const [counter, setCounter] = useState(0);
	function increment() {
		setCounter(counter => counter + 1);
	}
	return (
		<pre>
			<p>Unmounts: {counter}</p>
			<Button onClick={childDisclosure.toggle} sx={{ mr: 2 }}>
				Toggle child
			</Button>
			{childDisclosure.isOpen && <Child increment={increment} />}
		</pre>
	);
}

export default withThemeProvider(UseOnUnmountDemo);
