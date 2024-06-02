"use client"

import Link from 'next/link';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';

const Edit = () => {

    const pathname = usePathname();
    const PROJECT_URL = process.env.PROJECT_URL;

    const extractPath = (path : string) => {
        const match = path.match(/^\/docs\/(components\/[^\/]+|[^\/]+)$/);
        return path.startsWith('/docs/components/') && match ? match[1] : `${path.substring(1)}.mdx`;
    }

    return (
        <Link href={`${PROJECT_URL}${extractPath(pathname)}`} className="text-sm md:text-base mb-5 flex items-center space-x-1 text-[#b2b2b2]">
            <PencilSquareIcon className="size-4 md:size-6" />
            <span>Edit this page on Github</span>
        </Link>
    );
}

export default Edit;