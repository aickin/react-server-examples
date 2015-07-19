import React from "react";
import { deleteTodo } from "../actions/TodoActions";

export default class TodosFooter extends React.Component {
	render() {
		const { todos } = this.props;

		const itemsLeft = todos.filter(todo => !todo.completed).length;

		return (
			<footer className="footer">
				{ /* This should be `0 items left` by default */ }
				<span className="todo-count">
					<strong>{itemsLeft}</strong> {itemsLeft === 1 ? "item" : "items"} left
				</span>
				{ /* Remove this if you don't implement routing */ }
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{ /* Hidden if no completed items are left ↓ */ }
				{todos.filter(todo => todo.completed).length > 0 && <button onClick={this.clearCompleted.bind(this)} className="clear-completed">Clear completed</button>}
			</footer>
		);
	}

	clearCompleted(e) {
		this.props.todos
			.filter(todo => todo.completed)
			.forEach((todo) => {
				this.props.dispatch(deleteTodo(todo));
			});
	}
}