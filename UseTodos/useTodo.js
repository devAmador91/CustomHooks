import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo) => {
    if (!newTodo.description) return;
    dispatch({
      type: "add todo",
      payload: newTodo,
    });
  };

  const onDeleteTodo = (id) => {
    dispatch({
      type: "delete todo",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: "toggle todo",
      payload: id,
    });
  };

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
