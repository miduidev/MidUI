export default function Button() {
  return (
    <>
      <button className='bg-[#1565C0] hover:bg-[#1565c0e1] transition-colors font-poppins rounded-md px-[16px] py-[8px] ease-in-out'>
        Click Me
      </button>

      <button className='bg-[#0D47A1] hover:bg-[#0d48a1e0] tranisiton-colors font-poppins rounded-md px-[16px] py-[8px] '>
        Click Me
      </button>

      <button className='bg-transparent hover:bg-[#27272A] transition-colors font-poppins rounded-md px-[16px] py-[8px] border-2 border-[#27272A]'>
        Click Me
      </button>

      <button className='bg-transparent font-poppins rounded-[6px] px-[16px] py-[8px] hover:bg-[#27272A] transition-colors'>
        Click Me
      </button>
    </>
  );
}
