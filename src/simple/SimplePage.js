var React = require("react");

module.exports = class SimplePage {
	getTitle(next) { return "Simple"; }

	getElements (next) {
		return [
			<HelloWorld/>
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
				<div>Hello, World{exclamations}</div>
				<button onClick={this.increment}>Get More Excited!</button>
			</div>
			);
	}

	
}
