import { UserIcon , LockClosedIcon , XMarkIcon , CheckCircleIcon } from "@heroicons/react/24/outline";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets : ["latin"] , weight : "400"})

const DisplayCompoents = () => {
  return (
      <div className={`flex flex-col ${poppins.className}`}>
          <div className="flex justify-end gap-4">
            <div className="flex flex-col space-y-2 items-end mt-10">
                  <div className="border border-[#1E1E1E] rounded-md flex items-center w-48 text-sm">
                      <UserIcon className="size-6 mx-1 text-[#545353]" />
                      <input className='w-full outline-none py-2 bg-transparent' type="text" placeholder="Username"/>
                  </div>
                  <div className="flex">
                    <div className="select-none size-[70px] bg-[#EEEEEE] text-[#565656] rounded-full flex items-center justify-center">
                        <span className="text-4xl font-black">MD</span>
                    </div>

                    <div className="flex flex-col items-end space-y-4 select-none">
                        <button className='w-fit rounded-md px-4 py-2 bg-[#1565C0]'>Click Me</button>
                        <button className='rounded-md px-7 py-2 bg-[#212121]'>Click Me</button>
                          
                    </div>
                  </div>
                  <button className='mt-5 select-none rounded-md px-4 py-2 bg-transparent border border-white space-x-2'>
                        <span>Components</span>
                        <span className="text-xs bg-[#565656] p-1 rounded-full">64</span>
                   </button>
              </div>
              <div className="flex flex-col p-4 space-y-2 border border-[#1E1E1E] w-64 rounded-md">
                  <span className='text-xl font-bold text-white'>Cards</span>
                  <p className='text-[#545353]'>Lorem ipsum dolor sit amet consectetur. Ipsum suspendisse ridiculus in dolor leo ultrices volutpat Lorem ipsum dolor sit amet consectetur. Ipsum suspendisse ridiculus in dolor leo</p>
                  <button className='rounded-md px-4 py-2 bg-[#1565C0]'>Click Me</button>
              </div>
          </div>
          <div className="mt-3 border border-[#1E1E1E] rounded-md flex items-center self-end w-72 text-sm">
                <LockClosedIcon className="size-6 mx-1 text-[#545353]" />
                <input className='w-full outline-none py-2 bg-transparent' type="password" placeholder="Password"/>
          </div>
          <div className="self-center text-green-500 flex items-center w-96 mt-3 rounded-md border border-green-500 px-4 py-2 space-x-4 text-sm">
              <CheckCircleIcon className="size-10" />
              <span>Lorem ipsum dolor sit amet consectetur. Ipsum suspendisse ridiculus in dolor leo </span>
              
          </div>
    </div>
  )
}

export default DisplayCompoents;