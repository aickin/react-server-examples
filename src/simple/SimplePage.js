import React from "react";
import FullWidthGrid from "./components/FullWidthGrid";
import Button from "react-bootstrap/lib/Button";

export default class SimplePage {
	getTitle(next) { return "Simple"; }

	getElements (next) {
		return [
			<FullWidthGrid><HelloWorld/></FullWidthGrid>
		];
	}

}

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {exclamationCount: 0};
		this.increment = (e) => {
			this.setState({exclamationCount: this.state.exclamationCount + 1});
		}
	}

	render() {
		let exclamations = "";
		for (let i = 0; i < this.state.exclamationCount; i++) {
			exclamations += "!";
		}

		return (
			<div>
				<h2>Hello, World{exclamations}</h2>
				<Button bsStyle='primary' onClick={this.increment}>Get More Excited!</Button>
			</div>
			);
	}

	
}
