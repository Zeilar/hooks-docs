import TextField from "@mui/material/TextField";
import { useFetch } from "@zeilar/hooks";
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
				sx={{ mb: 2 }}
			/>
			{isLoading && <p>Loading... ⌛</p>}
			{isSuccess && <p>Success ✅</p>}
			{isError && <p>Error ❌</p>}
			{isSuccess && <p>{JSON.stringify(data, null, 4)}</p>}
		</pre>
	);
}

export default withThemeProvider(UseFetchDemo);
