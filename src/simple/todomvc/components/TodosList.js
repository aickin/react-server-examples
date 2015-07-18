import React from "react";
import TodoListItem from "./TodoListItem";
import { updateTodo } from "../actions/TodoActions";

export default class TodosList extends React.Component {
	render() {
		const { todos } = this.props;

		return (
			<section className="main">
				<input className="toggle-all" type="checkbox" onChange={this.toggleAll.bind(this)} checked={todos.filter(todo => todo.completed).length === todos.length} />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{todos.map((todo) => <TodoListItem todo={todo} dispatch={this.props.dispatch} />)}
				</ul>
			</section>
		);
	}

	toggleAll(e) {
		const { todos, dispatch } = this.props;

		const uncompletedCount = todos.filter(todo => !todo.completed).length;

		// if there are ANY uncompleted items, we set them all to compeleted.
		const newCompletedValue = uncompletedCount > 0 ? true : false;

		todos.forEach(todo => dispatch(updateTodo(todo, todo.text, newCompletedValue)));
	}
}