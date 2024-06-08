"use client"
import { useConfigStore } from "@/store/config";
import { getCodeIcon } from "@/utils";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence , motion } from "framer-motion";
import path from "path-browserify";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const CodeDropdown = ({
    files,
    activeIndex,
    }:{
    files: string[];
    activeIndex: number | undefined;
    }) => {
    
    const [selectOpen, setSelectOpen] = useState(false);
    const wrap : MutableRefObject<HTMLDivElement | null> = useRef(null);
    const setLanguage = useConfigStore((config) => config.setLanguage);



    useEffect(() => {
        function handleClickOutside(event : any) {
            if (wrap.current && !wrap.current.contains(event.target)) {
                setSelectOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrap]);


    
  return (
    <div ref={wrap} className="relative text-xs block lg:hidden">
        <button
              onClick={()=>setSelectOpen(!selectOpen)}
              className="bg-[#1565C0] px-2 py-1 rounded-md uppercase"
          >
              <div className="flex items-center space-x-1 pointer-events-none">
                <ChevronUpDownIcon className="size-4" />
                <span>{path.extname(files[activeIndex ?? 0]).slice(1)}</span>
                <span>{getCodeIcon(files[activeIndex ?? 0])}</span>
              </div>
          </button>


          <AnimatePresence>
          {
          !!selectOpen &&
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="flex w-full justify-end">
            <div className="absolute z-30 flex flex-col items-end justify-center border border-[#202020] mt-2 rounded-md divide-y divide-solid divide-[#202020]">
                {
                        files.map((v, i) => {
                            if (activeIndex === i) {
                                return null;
                            }
                            const ext = path.extname(v).slice(1);
                            return (
                            <button onClick={(e) => {
                                    e.preventDefault();
                                    setSelectOpen(false);
                                    setLanguage(ext as "tsx" | "jsx" | "html" | "vue");
                                }} key={i} className="px-2 py-1 uppercase rounded-md bg-[#141414]" >
                                <div className="flex items-center space-x-2 pointer-events-none">
                                    <span>{ext}</span>
                                    <span>{getCodeIcon(v)}</span>
                                </div>
                            </button>
                            
                        )
                    })
                }
            </div>
          </motion.div>    
          }
        </AnimatePresence>
    </div>
  )
}

export default CodeDropdown;