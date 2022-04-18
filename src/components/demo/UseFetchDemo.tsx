import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFetch } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

function UseFetchDemo() {
	const [id, setId] = useState(1);
	const { data, isError, isLoading, isSuccess } = useFetch<Todo[]>(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return (
		<pre>
			<TextField
				value={id}
				label="ID"
				onChange={e => setId(parseInt(e.target.value) || 0)}
				type="number"
				name="id"
				InputProps={{
					inputProps: {
						min: 0,
					},
				}}
				sx={{ mb: 2 }}
			/>
			{isLoading && <div>Loading... ⌛</div>}
			{isSuccess && <div>Success ✅</div>}
			{isError && <div>Error ❌</div>}
			{isSuccess && (
				<Box marginTop={2}>{JSON.stringify(data, null, 4)}</Box>
			)}
		</pre>
	);
}

export default withThemeProvider(UseFetchDemo);
