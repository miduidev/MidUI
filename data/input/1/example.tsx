export function Input() {
  return (
    <div className="rounded-[10px] border-2 border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors min-w-max">
      <input
        type="text"
        className="w-full placeholder:text-[#545353] bg-transparent outline-none"
        placeholder="Search"
      />
    </div>
  );
}
