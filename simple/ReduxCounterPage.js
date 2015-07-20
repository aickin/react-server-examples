import React from "react";
import FullWidthGrid from "./components/FullWidthGrid";
import App from "./reduxCounter/containers/App";

export default class ReduxCounterPage {
	getTitle() { return "Redux Counter"; }

	getElements() {
		return (
			<FullWidthGrid>
				<div>
					This is the counter example from <a href="https://github.com/gaearon/redux">redux</a>, Dan Abramov's
					fun minimal Flux implementation. We simply copied the code over and deleted the index files, the server
					runner, and webpack config. We wrote a simple Page class (ReduxCounterPage.js), and react-server happily 
					pre-renders the code. Note that this page retains hot loading goodness of components and stores.
				</div>
				<br/>
				<App/>
			</FullWidthGrid>
		);
	}
}
