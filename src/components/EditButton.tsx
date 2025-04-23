type EditButtonProps = {
  id: string;
  toggleEditMode: (id: string) => void;
  editTodoId: string | null;
  handleEditTodo: (id: string, key: string, value: string) => void;
};

export default function EditButton({
  id,
  toggleEditMode,
  editTodoId,
}: EditButtonProps) {
  const isEditing = editTodoId === id;

  return (
    <button
      className="cursor-pointer  hover:bg-indigo-600"
      onClick={(e) => {
        e.stopPropagation();
        toggleEditMode(id);
      }}
    >
      {isEditing ? "💾" : "🖊️"}
    </button>
  );
}
