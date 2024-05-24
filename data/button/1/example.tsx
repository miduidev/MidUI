export default function Button() {
  return (
    <>
      <button className="bg-[#1565C0] font-poppins rounded-[6px] px-[24px] py-[10px]">
        Click Me
      </button>

      <button className="bg-[#0D47A1] font-poppins rounded-[6px] px-[24px] py-[10px]">
        Click Me
      </button>

      <button className="bg-transparent font-poppins rounded-[6px] px-[24px] py-[10px] border-2 border-[#27272A]">
        Click Me
      </button>

      <button className="bg-transparent font-poppins rounded-[6px] px-[24px] py-[10px] hover:bg-[#212121] transition-colors">
        Click Me
      </button>
    </>
  );
}
