import BrowseButton from "./_components/browse-button";
import DisplayComponents from "./_components/display-components";
import TailwindBadge from "./_components/tailwind-badge";

export default function Home() {
  return (
    <main className="flex-1 flex justify-center md:justify-between px-10 h-full items-center mb-20 container mx-auto relative text-center">
      <div className="gradient-06 -z-40"></div>
      <div className="flex flex-col text-5xl md:text-7xl font-bold justify-center leading-tight">
        <TailwindBadge />
        <h1 className="opacity-90 tracking-tight">Free modern</h1>
        <h1 className="opacity-90 tracking-tight">Open source</h1>
        <h1 className="bg-gradient-to-r animated-hero-text-bg from-[#00D4FF] via-[#00D4FF] to-[#068BD4] bg-clip-text text-transparent tracking-tight">
          <div className="flex flex-col w-fit">
            <span>Tailwindcss</span>
            <div className="w-full animated-hero-text-bg h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#068BD4]"></div>
          </div>
          <div className="flex flex-col w-fit">
            <span className="text-center">Components</span>
            <div className="w-full animated-hero-text-bg h-1.5 bg-gradient-to-r from-[#00D4FF] via-[#00D4FF] to-[#068BD4]"></div>
          </div>
        </h1>

        <BrowseButton />
      </div>

      <DisplayComponents />
    </main>
  );
}
