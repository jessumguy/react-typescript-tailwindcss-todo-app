import { useTodosContext } from "../lib/hooks";

export default function Counter() {
  const { totalNumberOfTodos, numberOfCompletedTodos } = useTodosContext();

  return (
    <p className="text-white/75">
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
    </p>
  );
}
