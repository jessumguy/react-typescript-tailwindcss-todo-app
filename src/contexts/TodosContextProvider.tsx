import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  toggleEditMode: (id: string) => void;
  handleEditTodo: (id: string, key: string, value: string) => void;
  editTodoId: string | null;
  handleToggleTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const generateUUID = () => {
  return self.crypto.randomUUID();
};

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [
      { id: generateUUID(), text: "learn programming", isCompleted: false },
    ];
  }
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  // state
  const [editTodoId, setEditTodoIt] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: generateUUID(),
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const toggleEditMode = (id: string) => {
    setEditTodoIt((prevId) => (prevId === id ? null : id));
  };

  const handleEditTodo = (id: string, key: string, value: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              [key]: value,
            }
          : todo
      )
    );
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // side effects - local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // side effects - fetch data
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch(
  //       "https://bytegrad.com/course-assets/api/todos"
  //     );
  //     const todos = await response.json();
  //     setTodos(todos);
  //   };
  //   fetchTodos();
  // }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        toggleEditMode,
        handleEditTodo,
        editTodoId,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
