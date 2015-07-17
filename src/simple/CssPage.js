import React from "react";
import FullWidthGrid from "./components/FullWidthGrid";
import * as css from "./CssPage.css";

export default class CssPage {
	getElements() {
		return (
			<FullWidthGrid>
				<div className="redBackground">This should have a red background.</div>
			</FullWidthGrid>
		);
	}
}