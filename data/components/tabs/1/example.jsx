"use client"
import {useState } from "react";

const Example = () => {
    const [active , setActive] = useState(0);

    const tabs = [
        {
            name : "Profile" ,
            element : <ProfileComponent />
        },
        {
            name : "Description" ,
            element : <DescriptionComponent />
        },
    ];

    const changeTabs = (tabIndex) => {
        setActive(tabIndex);
    }

    return (
        <div className="flex flex-col space-y-2 w-1/2">
            <div className="flex p-1 rounded-md bg-[#181818] items-center">
                {
                    tabs.map((tab,i)=>(
                        <button key={i} onClick={()=>changeTabs(i)} className={`transition-colors duration-200 grow px-4 py-2 rounded-md ${active===i?"bg-[#1565C0]":"bg-transparent"} flex justify-center`}>
                            <span className="pointer-events-none">{tab.name}</span>
                        </button>
                    ))
                }
            </div>
            <div className="p-2 bg-[#181818] rounded-md">
                {tabs[active].element}
            </div>
        </div>
    )
}

function ProfileComponent(){
    return (
        <div className="flex flex-col">
            <div className="flex space-x-2 my-5">
            <img className="cursor-pointer object-cover size-16 rounded-full" src="https://cataas.com/cat?width=300&height=300"alt="profile" />
                <div className="flex flex-col">
                    <span className="text-lg">Mr. Cat</span>
                    <span>Software Engineer at MidUI</span>
                </div>
            </div>
        </div>
    )
}

function DescriptionComponent(){
    return (
        <div className="flex flex-col max-w-xl">
            <span className="text-xl">Mr. Cat</span>
            <br />
            <p>
            To leverage my expertise in napping, toy mouse retrieval, and purr therapy to bring joy and stress relief to a loving home or office environment. Seeking a position where my impeccable litter box manners and unparalleled ability to find the sunny spot will be appreciated and celebrated.
            </p>
        </div>
    )
}

export default Example;
