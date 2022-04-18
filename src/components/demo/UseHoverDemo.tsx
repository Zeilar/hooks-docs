import { useHover } from "use-ful-hooks-ts";
import React, { useState } from "react";
import { withThemeProvider } from "../withThemeProvider";

function UseHoverDemo() {
	const { isHovered, ref } = useHover<HTMLParagraphElement>();
	return (
		<pre>
			<span ref={ref}>Hover me {isHovered && "👋"}</span>
		</pre>
	);
}

export default withThemeProvider(UseHoverDemo);
