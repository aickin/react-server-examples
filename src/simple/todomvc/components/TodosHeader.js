import React from "react";
import {createTodo} from "../actions/TodoActions";
import { connect } from 'redux/react';

export default class TodosHeader extends React.Component{
	constructor() {
		super();
		this.state = {};
	}
	
	render() {
		const { text } = this.state;
		return(
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autofocus onKeyUp={this.handleKeyUp.bind(this)} onChange={this.onChange.bind(this)} value={text} />
			</header>
		);
	}

	onChange(e) { 
		this.setState({text: e.target.value});
	}

	handleKeyUp(e) {
		if (13 === e.keyCode) {
			e.preventDefault();
			this.props.dispatch(createTodo(e.target.value));
			this.setState({text:""});
		}
	}
}