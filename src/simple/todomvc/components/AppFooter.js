import React from "react";

export default class AppFooter extends React.Component{
	render() {
		return (
			<footer className="info">
				<p>Double-click to edit a todo</p>
				{ /* Remove the below line ↓ */ }
				<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
				{ /* Change this out with your name and url ↓ */ }
				<p>Created by <a href="http://todomvc.com">you</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>

		);
	}
}