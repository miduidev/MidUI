import DisplayComponents from "./_components/display_components";
import TailwindBadge from "./_components/tailwind_badge";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <main className="flex justify-between px-10 h-full my-20">
      <div className="flex flex-col text-7xl font-bold justify-center leading-tight">
        <TailwindBadge />
        <h1 className="opacity-90">Free modern</h1>
        <h1 className="opacity-90">Open source</h1>
        <h1 className="bg-gradient-to-r animated-hero-text-bg from-[#00D4FF] via-[#00D4FF] to-[#068BD4] bg-clip-text text-transparent">
          <div className="flex flex-col w-fit"><span>Tailwindcss</span><div className="w-full animated-hero-text-bg h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#068BD4]"></div></div>
          <div className="flex flex-col w-fit"><span>Components</span><div className="w-full animated-hero-text-bg h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#068BD4]"></div></div>
        </h1>

        <button className="text-xl font-semibold self-start mt-8 px-5 py-3 flex items-center space-x-2 border-[#1565C0] border-2 rounded-full transition-all duration-150 hover:scale-105 hover:bg-[#1565C0]">
          <span>Browse Components</span>
          <ArrowRightCircleIcon className="size-8" />
        </button>
      </div>

      <DisplayComponents />
      
    </main>
  );
}
