import SearchIcon from "@/assets/search.svg";
import { cn } from "@/utils/cn";
import { ClassNameValue } from "tailwind-merge";
import useOpenStore from "@/store/store";

type InputProps = {
  className?: ClassNameValue;
};

function Input({ className }: InputProps) {
  const setOpen = useOpenStore((state) => state.setIsOpen);

  function handleCommandMenu() {
    setOpen(true);
  }
  return (
    <button
      className={cn(
        "rounded-[10px] border-2 border-[#27272A]",
        "px-[20px] py-[10px] gap-[10px]",
        "flex items-center justify-center",
        "relative w-max focus-within:border-[#1565C0] transition-colors",
        "hover:cursor-text",
        className
      )}
      onClick={handleCommandMenu}
    >
      <SearchIcon className="w-4 h-4" />
      <div className="w-28 text-[#545353] bg-transparent outline-none group text-start">
        Search
      </div>

      <div
        className={cn(
          "border border-[#545353] rounded-[100px]",
          "text-white min-w-max h-[18px]",
          "font-bold text-[8px] flex",
          "items-center justify-center p-[6px]"
        )}
      >
        <span>CTRL + K</span>
      </div>
    </button>
  );
}

export default Input;
