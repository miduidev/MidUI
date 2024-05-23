"use client"

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const BrowseButton = () => {

    const router = useRouter();

  return (
    <button onClick={()=>router.push("/docs")} className="text-sm md:text-lg font-medium self-center md:self-start mt-8 px-3 md:px-5 py-2 md:py-3 flex items-center space-x-2 border-[#1565C0] border-2 rounded-full transition-all duration-150 hover:scale-105 hover:bg-[#1565C0]">
        <span>Browse Components</span>
        <ArrowRightCircleIcon className="size-6 md:size-8" />
    </button>
  )
}

export default BrowseButton;