import { useArray } from "@zeilar/hooks";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { withBrowserOnly } from "../withBrowserOnly";

function getRandomNumber() {
	return Math.floor(Math.random() * 10);
}

function UseArrayDemo() {
	const array = useArray<number>([1, 2, 3, 4, 5]);

	const pushRandom = () => array.push(getRandomNumber());
	const unshiftRandom = () => array.unshift(getRandomNumber());
	const filterUneven = () => array.filter(element => element % 2 === 0);
	const fillRandom = () => array.fill(getRandomNumber());
	const sortLowestToHighest = () => array.sort((a, b) => a - b);
	const removeFirst = () => array.remove(0);

	return (
		<pre>
			<p>{JSON.stringify(array.state).replaceAll(",", ", ")}</p>
			<ButtonGroup>
				<Button onClick={pushRandom}>Push</Button>
				<Button onClick={unshiftRandom}>Unshift</Button>
				<Button onClick={array.pop}>Pop</Button>
				<Button onClick={array.shift}>Shift</Button>
				<Button onClick={array.reverse}>Reverse</Button>
				<Button onClick={filterUneven}>Filter</Button>
				<Button onClick={fillRandom}>Fill</Button>
				<Button onClick={sortLowestToHighest}>Sort</Button>
				<Button onClick={removeFirst}>Remove</Button>
				<Button onClick={array.empty}>Empty</Button>
				<Button onClick={array.reset}>Reset</Button>
			</ButtonGroup>
		</pre>
	);
}

export default withThemeProvider(withBrowserOnly(UseArrayDemo));
