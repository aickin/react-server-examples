import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/ActionTypes';

export default function todos(state = [], action) {
	if (CREATE_TODO === action.type) {
		// we always add the new todo to the top of the list.
		return [{text: action.text}, ...state];
	} else if (UPDATE_TODO === action.type) {
		const index = state.indexOf(action.todo);
		if (index === -1) return state;
		return [
			...state.slice(0, index), 
			{ text: action.text, completed: action.completed }, 
			...state.slice(index + 1)
		];
	} else if (DELETE_TODO === action.type) {
		const index = state.indexOf(action.todo);
		if (index === -1) return state;
		return [...state.slice(0,index), ...state.slice(index + 1)];
	}
	return state;
}
