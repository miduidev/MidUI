"use client"
import useTooltip from "@/app/_hooks/useTooltip"
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { getCleanCode } from "@/utils";


const CopyToClipboard = ({ code }: {code : string}) => {

    const { isVisible, toggle } = useTooltip(2000);

    const copyCode = () => {
        toggle();
        navigator.clipboard.writeText(getCleanCode(code));
    }

    return (
        <button onClick={copyCode} className={`relative p-1 rounded-md ${isVisible?"bg-[#1565C0]":""}`}>
            <ClipboardDocumentListIcon className="size-4" />
            {
                isVisible
                && 
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    className="absolute p-1 bg-black text-xs left-1/2 -top-5 pointer-events-none rounded-md">
                    <span>Copied!</span>
                </motion.div>
            </AnimatePresence>
            }
          </button>
    )
}

export default CopyToClipboard;