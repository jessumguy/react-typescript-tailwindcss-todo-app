import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[1rem] col-[1/3] row-[1/2] bg-[#535C91] border-b border-black/[0.10]">
      <Logo />

      <Counter />
    </header>
  );
}
