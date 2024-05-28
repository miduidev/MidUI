"use client";
import { getCodeIcon } from '@/utils';
import path from "path-browserify";

const CodeSelect = ({active , setActive ,files} : {active : number , setActive : Function , files : string[]}) => {

    const checkOnClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        const id = target.getAttribute("midui-id");
        if(id){
            setActive(parseInt(id));
        }
    }

    return (
    <div className="w-full flex justify-center text-xs">
        <div className="flex mx-3 bg-[#191919] w-fit rounded-md transition-colors duration-300">
            {
                files.map((v,i)=><button key={i} midui-id={i} onClick={checkOnClick} className={`${active === i &&"bg-[#1565C0]"}  px-2 py-1 rounded-md uppercase`}> <div className="flex items-center space-x-2 pointer-events-none"><span>{path.extname(v).slice(1)}</span> <span>{getCodeIcon(v)}</span></div> </button>)
            }
        </div>
    </div>
  )
}

export default CodeSelect;