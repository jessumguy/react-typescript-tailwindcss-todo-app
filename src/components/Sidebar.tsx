import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <section className="flex flex-col row-[2/3] bg-[#9290C3] border border-black/[0.10] px-[1rem] pt-[1rem] pb-[2rem]">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
