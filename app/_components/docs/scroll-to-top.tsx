"use client"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollTop = () => {

    const [toggle, setToggle] = useState(false);

    const scrollEvent = () => {
        setToggle((document.body.scrollTop || document.documentElement.scrollTop) > window.innerHeight);
    }

    useEffect(() => {
        document.body.addEventListener("scroll", scrollEvent)
        return () => {
            document.body.removeEventListener("scroll", scrollEvent);
        }
    }, []);

    return (
        <AnimatePresence>
            {
                toggle &&
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="fixed rounded-full bottom-5 right-10 p-2 bg-[#1565C0] z-30">
                    <Link href="#" className="">
                        <ChevronDoubleUpIcon className="size-6 md:size-8" />
                    </Link>
                </motion.div>
            }
        </AnimatePresence>
  )
}

export default ScrollTop;