import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import { useDisclosure } from "use-ful-hooks-ts";
import React from "react";
import { withThemeProvider } from "../withThemeProvider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function UseDisclosureDemo() {
	const { close, isOpen, open, toggle } = useDisclosure();

	function onChangeHandler(
		_e: React.SyntheticEvent<Element, Event>,
		expanded: boolean
	) {
		expanded ? open() : close();
	}

	return (
		<pre>
			<Button sx={{ mb: 2 }} onClick={toggle}>
				Toggle
			</Button>
			<Accordion expanded={isOpen} onChange={onChangeHandler}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					Click me
				</AccordionSummary>
				<AccordionDetails>Hello👋</AccordionDetails>
			</Accordion>
		</pre>
	);
}

export default withThemeProvider(UseDisclosureDemo);
