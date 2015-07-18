import React from "react";
import cn from "classnames";
import {updateTodo, deleteTodo} from "../actions/TodoActions";

export default class TodoListItem extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { todo: {completed = false, text} } = this.props;
		const { editing, currentText = text} = this.state;

		/* List items should get the class `editing` when editing and `completed` when marked as completed */
		return (
			<li className={cn({completed, editing})}>
				<div className="view">
					<input className="toggle" type="checkbox" onChange={this.toggleComplete.bind(this)} checked={completed} />
					<label onDoubleClick={this.startEditing.bind(this)}>{text}</label>
					<button className="destroy" onClick={this.destroy.bind(this)}></button>
				</div>
				<input className="edit" onChange={this.onEdit.bind(this)} onKeyUp={this.handleKeyPress.bind(this)} value={currentText} />
			</li>
		);
	}

	onEdit(e) {
		this.setState({currentText: e.target.value});;
	}

	handleKeyPress(e) {
		if (13 === e.keyCode) {
			// ENTER: fire of the update.
			this.props.dispatch(updateTodo(this.props.todo, e.target.value, this.props.todo.completed));
			e.preventDefault();
			this.setState({editing: false, currentText: undefined})
		}
		if (27 === e.keyCode) {
			// ESCAPE: just revert to previous text.
			e.preventDefault();
			this.setState({editing:false, currentText: undefined});
		}
	}
	
	toggleComplete(e) {
		this.props.dispatch(updateTodo(this.props.todo, this.props.todo.text, !this.props.todo.completed));
	}

	startEditing(e) {
		this.setState({editing: true})
	}

	destroy(e) {
		this.props.dispatch(deleteTodo(this.props.todo));
	}
}
