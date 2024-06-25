function XIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-4 relative -right-2 -top-2 ml-[-10px]'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );
}

export function Toast() {
  return (
    <div className='rounded-[10px] bg-[#111111] border-2 border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 transition-colors min-w-max'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <XIcon />
    </div>
  );
}
