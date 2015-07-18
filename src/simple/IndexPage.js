import React from "react";
import { Link } from "react-server";
import FullWidthGrid from "./components/FullWidthGrid";

export default class IndexPage {
	getTitle(next) { return "Index"; }

	getElements (next) {
		return [
			<FullWidthGrid>
				Welcome to the react-server examples. Here are a few examples to try out that demonstrate
				server-side rendering.
				<ul>
					<li><Link path="/simple">Simple Page</Link> - This is just a simple Hello World React component
					that demonstrates that the framework will generate code server-side and then hook up the components'
					interactivity on client-side.</li>
					<li><Link path="/ajax">Simple Ajax Page</Link> - This page retrieves a simple JSON payload from a public
					JSON server and inserts into the text. Interestingly, the service sometimes returns within the 250ms
					timeout and sometimes doesn't. As a result, the page sometimes has the data in the generated HTML, while
					at other times the data comes down in a JavaScript call that's streamed down to the client.</li>
					<li><Link path="/largestatic">Large Static Page</Link> - This page outputs a large amount (just shy
					of 1MB) of text to show how react-server deals with large pages.</li>
					<li><Link path="/css">CSS Page</Link> - This page demonstrates using require to include
					CSS files.</li>
					<li><Link path="/reduxcounter">Redux Counter Example Page</Link> - This page uses the counter example 
					from <a href="https://github.com/gaearon/redux">redux</a>, showing a minimal Flux flow in a react-server page.</li>
				</ul>
			</FullWidthGrid>
		];
	}

}
