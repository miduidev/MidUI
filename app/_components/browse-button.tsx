import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const BrowseButton = () => {
  return (
    <Link
      href="/docs/"
      className="text-sm md:text-lg font-medium self-center md:self-start mt-8 px-3 md:px-5 py-2 md:py-3 flex items-center space-x-2 border-[#1565C0] border-2 rounded-full transition-all duration-150 hover:scale-105 hover:bg-[#1565C0]"
    >
      <span>Browse Components</span>
      <ArrowRightCircleIcon className="size-6 md:size-8" />
    </Link>
  );
};

export default BrowseButton;
