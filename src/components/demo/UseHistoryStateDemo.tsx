import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useHistoryState } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";
import Typography from "@mui/material/Typography";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";

const activeStyling: SystemStyleObject = {
	color: "primary.main",
	borderBottomColor: "primary.main",
	borderBottom: "2px solid",
};

function UseHistoryStateDemo() {
	const messages = useHistoryState<string>("First");
	const [input, setInput] = useState("");

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		messages.push(input);
		setInput("");
	}

	function isActive(index: number) {
		return messages.historyIndex === index;
	}

	return (
		<pre>
			<Box
				component="form"
				display="flex"
				alignItems="center"
				onSubmit={onSubmit}
			>
				<TextField
					label="String"
					name="string"
					value={input}
					onChange={e => setInput(e.target.value)}
					variant="outlined"
					placeholder="Insert a string"
					required
					autoFocus
				/>
				<Button sx={{ ml: 1 }} type="submit">
					Add
				</Button>
			</Box>
			<Typography marginTop={2}>State</Typography>
			<Paper variant="outlined" sx={{ p: 2 }}>
				{JSON.stringify(messages.state)}
			</Paper>
			<Typography marginTop={2}>History</Typography>
			<Paper
				variant="outlined"
				sx={{ display: "flex", flexWrap: "wrap", p: 2, gap: 2 }}
			>
				{messages.history.map((value, i) => (
					<Box sx={isActive(i) ? activeStyling : undefined} key={i}>
						{value}
					</Box>
				))}
			</Paper>
			<Box marginTop={2}>
				<ButtonGroup>
					<Button
						disabled={!messages.hasPrevious}
						onClick={messages.oldest}
					>
						Oldest
					</Button>
					<Button
						disabled={!messages.hasPrevious}
						onClick={messages.back}
					>
						Back
					</Button>
					<Button
						disabled={!messages.hasNext}
						onClick={messages.forward}
					>
						Forward
					</Button>
					<Button
						disabled={!messages.hasNext}
						onClick={messages.newest}
					>
						Newest
					</Button>
				</ButtonGroup>
				<ButtonGroup sx={{ ml: 1 }}>
					<Button onClick={messages.reset}>Reset</Button>
					<Button onClick={messages.clear}>Clear</Button>
				</ButtonGroup>
			</Box>
		</pre>
	);
}

export default withThemeProvider(UseHistoryStateDemo);
