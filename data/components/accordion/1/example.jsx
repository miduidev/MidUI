"use client"

import { useRef, useState } from "react"

const FAQs = [
    {question : "What is the price of MidUI?" , answer : "Absolutely Nothing! You know we love open source."},
    {question : "Are components customizable?" , answer : "Yes, you can easily customize any component according to your use. "},
    {question : "How do i support MidUI" , answer : "Just star miduis on Github."},
]

const Accordion = () => {

    const [selected , setSelected] = useState(-1);
    const refs = useRef([]);

    const handleClick = (id) => {
        setSelected(id===selected?-1:id);
    }

    return (
        <div  className="flex flex-col space-y-4 w-80 md:w-96 bg-transparent p-2 md:p-4">
        {
            FAQs.map((faq, i)=>{
                return (
                    <div className="flex flex-col border-b border-[#191919] pb-3">
                        <button key={i} onClick={()=>{handleClick(i)}} className="flex justify-between w-full hover:underline cursor-pointer">
                            <span>{faq.question}</span>

                            <svg className={`size-4 transition-all duration-300 ${selected === i?"rotate-[180deg]":""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </button>
                        <div ref={e=>{refs.current[i]=e}} 
                             className={"text-sm mt-2 transition-all duration-300 overflow-hidden"}
                             style={{height : selected===i?`${refs.current[i]?.scrollHeight}px`:"0px"}}
                             >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Accordion;
