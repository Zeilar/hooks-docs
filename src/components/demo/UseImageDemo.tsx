import { useImage } from "@zeilar/hooks";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";
import useBaseUrl from "@docusaurus/useBaseUrl";

const URL = "https://i.imgur.com/j3CHqZJ.gif";

function UseImageDemo() {
	const { isError, isLoading, isSuccess } = useImage(URL);
	return (
		<pre>
			{isError && <p>Whoops 💥</p>}
			<img
				width={200}
				height={100}
				src={
					isSuccess ? URL : useBaseUrl("img/placeholder_200x100.png")
				}
			/>
		</pre>
	);
}

export default withThemeProvider(UseImageDemo);
