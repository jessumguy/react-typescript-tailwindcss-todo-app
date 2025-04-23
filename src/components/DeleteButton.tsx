type DeleteButtonProps = {
  id: string;
  onDeleteTodo: (id: string) => void;
};

export default function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <>
      {}
      <button
        className="cursor-pointer hover:bg-indigo-600"
        onClick={(e) => {
          e.stopPropagation();
          onDeleteTodo(id);
        }}
      >
        🗑️
      </button>
    </>
  );
}
