import React from "react";
import AppFooter from "./AppFooter";
import TodosHeader from "./TodosHeader";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";
import { Provider } from 'redux/react';
import { createRedux } from 'redux';
import * as stores from "../stores";
import { connect } from 'redux/react';

const redux = createRedux(stores);

// const todos = [{completed: true, text: "Taste JavaScript"}, {text: "Buy a unicorn"}, {text:"foo"}, {completed: true, text: "bar"}];

export default class App extends React.Component {

	render() {
		return (
			<Provider redux={redux}>
				{ () => <Body/>}
			</Provider>
		);
	}
}

@connect(state => state)
class Body extends React.Component {
	render() {
		const { todos, dispatch } = this.props;
		return (
			<div>
				<section className="todoapp">
					<TodosHeader dispatch={dispatch} />
					{todos.length > 0 && <TodosList todos={todos} dispatch={dispatch}/>}
					{todos.length > 0 && <TodosFooter todos={todos} dispatch={dispatch}/>}
				</section>
				<AppFooter/>
			</div>
		);
	}
}