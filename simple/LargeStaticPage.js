import React from "react";
import TaleOfTwoCities from "./components/TaleOfTwoCities";

export default class LargeStaticPage {
	getTitle() { return "Large Static"; }

	getElements() {
		return [
			<TaleOfTwoCities/>
		];
	}
}