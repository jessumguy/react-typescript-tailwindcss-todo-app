import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useTodosContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text=[#231d15]">Add a todo</h2>

      <input
        type="text"
        className="h-[2.5rem] border border-black rounded-[0.4rem] text-[14px] block w-full px-[0.6rem] mb-1.5"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <Button>Add to list</Button>
    </form>
  );
}
