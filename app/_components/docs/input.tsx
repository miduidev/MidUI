import SearchIcon from "@/assets/search.svg";
import { cn } from "@/utils/cn";

function Input() {
  return (
    <div
      className={cn(
        "rounded-[10px] border-2 border-[#27272A]",
        "px-[20px] py-[10px] gap-[10px]",
        "flex items-center justify-center",
        "relative w-max focus-within:border-[#1565C0] transition-colors"
      )}
    >
      <SearchIcon className="w-4 h-4" />
      <input
        type="text"
        className="w-28 placeholder:text-[#545353] bg-transparent outline-none group"
        placeholder="Search"
      />

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
    </div>
  );
}

export default Input;
