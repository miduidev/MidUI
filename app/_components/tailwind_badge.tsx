
const TailwindBadge = () => {
  return (
      <div className="self-center md:self-start select-none bg-black opacity-90 bg-opacity-10 w-fit flex rounded-full p-1 md:p-2 border-[#EEEEEE] border font-bold text-xs items-center space-x-1 md:space-x-2">
        <div className="size-2 md:size-3 rounded-full bg-green-600"></div>
        <span className="text-[10px] md:text-base text-[#EEEEEE]">TAILWINDCSS v3.0.2</span>
    </div>
  )
}

export default TailwindBadge;