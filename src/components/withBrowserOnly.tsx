import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";

export function withBrowserOnly<T = any>(Component: React.FC<T>) {
	return (props: T) => {
		return <BrowserOnly>{() => <Component {...props} />}</BrowserOnly>;
	};
}
