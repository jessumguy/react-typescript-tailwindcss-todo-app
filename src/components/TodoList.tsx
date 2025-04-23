import { useTodosContext } from "../lib/hooks";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function TodoList() {
  const {
    todos,
    editTodoId,
    handleEditTodo,
    handleToggleTodo,
    handleDeleteTodo,
    toggleEditMode,
  } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center text-white font-semibold">
          Start by adding a todo
        </li>
      )}

      {todos.map((todo) => (
        <div key={todo.id}>
          {editTodoId === todo.id ? (
            <li className="flex justify-between items-center px-[2rem] h-[4rem] text-[1rem] cursor-pointer border-b border-[#535C91] text-white/90">
              <input
                type="text"
                value={todo.text}
                className={`h-[2.5rem] border border-white rounded-[0.4rem] w-full px-[0.6rem] ${
                  todo.isCompleted ? "line-through text-[#888484]" : ""
                } `}
                onChange={(e) =>
                  handleEditTodo(todo.id, "text", e.target.value)
                }
              />

              <EditButton
                id={todo.id}
                handleEditTodo={handleEditTodo}
                toggleEditMode={toggleEditMode}
                editTodoId={editTodoId}
              />
              <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
            </li>
          ) : (
            <li
              className="flex justify-between items-center px-[2rem] h-[4rem] text-[1rem] cursor-pointer border-b border-[#535C91] text-white/90 hover:bg-[#070F2B]"
              onClick={() => {
                handleToggleTodo(todo.id);
              }}
            >
              <span
                className={`w-full px-[0.6rem] ${
                  todo.isCompleted ? "line-through text-[#888484]" : ""
                } `}
              >
                {todo.text}
              </span>
              <EditButton
                id={todo.id}
                toggleEditMode={toggleEditMode}
                handleEditTodo={handleEditTodo}
                editTodoId={editTodoId}
              />
              <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
            </li>
          )}
        </div>
      ))}
    </ul>
  );
}
