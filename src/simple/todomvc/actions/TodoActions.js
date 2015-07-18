import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/ActionTypes';

export function createTodo(text) {
  return { type: CREATE_TODO, text };
}

export function updateTodo(todo, text, completed) {
  return { type: UPDATE_TODO, todo, text, completed};
}

export function deleteTodo(todo) {
  return { type: DELETE_TODO, todo };
}
