function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 relative -right-2 -top-2 ml-[-10px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export function Toast() {
  return (
    <div className="rounded-[10px] bg-[#111111] border-2 border-[#2E7D32] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 transition-colors max-w-max text-[#4CAF50]">
      <Icon />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <XIcon />
    </div>
  );
}