type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`h-[2.5rem] bg-[#1B1A55] w-full hover:bg-[#070F2B] text-white rounded-[0.4rem] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}
