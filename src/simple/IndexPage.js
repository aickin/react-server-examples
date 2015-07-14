var React = require("react");
var Link = require("react-server").Link;

module.exports = class IndexPage {

	getElements (next) {
		return [
			<div>
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
				</ul>
			</div>
		];
	}

}
