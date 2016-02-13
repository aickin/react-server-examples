import React from "react"

export default class HelloWorld extends React.Component {
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
				<button onClick={this.increment}>Get More Excited!</button>
			</div>
			);
	}
}
