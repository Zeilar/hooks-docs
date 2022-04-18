import { useObject, AnyObject } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";

function UseObjectDemo() {
	const object = useObject<AnyObject>({ key: "value" });
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");
	const [removeKey, setRemoveKey] = useState("");

	function keyValueSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		object.set(key, value);
		setKey("");
		setValue("");
	}

	function removeKeySubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		object.remove(removeKey);
		setRemoveKey("");
	}

	return (
		<pre>
			<p>{JSON.stringify(object.state, null, 4)}</p>
			<Box
				component="form"
				display="flex"
				alignItems="center"
				onSubmit={keyValueSubmit}
			>
				<TextField
					required
					variant="outlined"
					label="Key"
					value={key}
					onChange={e => setKey(e.target.value)}
				/>
				<TextField
					required
					variant="outlined"
					label="Value"
					value={value}
					onChange={e => setValue(e.target.value)}
					sx={{ mx: 1 }}
				/>
				<Button type="submit">Set</Button>
			</Box>
			<Box
				component="form"
				display="flex"
				alignItems="center"
				marginTop={1}
				onSubmit={removeKeySubmit}
			>
				<TextField
					required
					variant="outlined"
					label="Key"
					value={removeKey}
					onChange={e => setRemoveKey(e.target.value)}
					sx={{ mr: 1 }}
				/>
				<Button type="submit">Remove</Button>
			</Box>
			<ButtonGroup sx={{ mt: 1 }}>
				<Button onClick={object.empty}>Empty</Button>
				<Button onClick={object.reset}>Reset</Button>
			</ButtonGroup>
		</pre>
	);
}

export default withThemeProvider(UseObjectDemo);
