import Button from "@mui/material/Button";
import { useOnMount, useDisclosure } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";

interface ChildProps {
	increment(): void;
}

function Child({ increment }: ChildProps) {
	useOnMount(increment);
	return <span>Child</span>;
}

function UseOnMountDemo() {
	const childDisclosure = useDisclosure(true);
	const [counter, setCounter] = useState(0);
	function increment() {
		setCounter(counter => counter + 1);
	}
	return (
		<pre>
			<p>Mounts: {counter}</p>
			<Button onClick={childDisclosure.toggle} sx={{ mr: 2 }}>
				Toggle child
			</Button>
			{childDisclosure.isOpen && <Child increment={increment} />}
		</pre>
	);
}

export default withThemeProvider(UseOnMountDemo);
