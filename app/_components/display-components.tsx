import { poppins } from '@/lib/fonts';
import {
  UserIcon,
  LockClosedIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const DisplayCompoents = () => {
  return (
    <div
      className={`flex-col hidden md:flex md:translate-x-1/4 lg:translate-x-0 ${poppins.className}`}
    >
      <div className='flex justify-end gap-4'>
        <div className='flex flex-col space-y-2 items-end mt-10'>
          <div className='mb-2 rounded-[10px] border-2 bg-black border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors w-[250px]'>
            <svg
              className='size-6 opacity-30'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
              />
            </svg>
            <input
              type='password'
              className='w-full placeholder:text-[#545353] bg-transparent outline-none'
              placeholder='Password'
            />
          </div>

          <div className='flex'>
            <div className='flex items-center justify-center p-2 cursor-pointer size-16 bg-gray-300 rounded-full select-none mr-2'>
              <span className='text-3xl text-gray-600 font-semibold'>MU</span>
            </div>

            <div className='flex flex-col items-end space-y-4 select-none'>
              <button className='bg-[#1565C0] hover:bg-[#1565c0e1] transition-colors font-poppins rounded-[6px] px-[16px] py-[8px] ease-in-out'>
                Click Me
              </button>
              <button className='bg-transparent hover:bg-[#27272A] transition-colors font-poppins rounded-[6px] px-[16px] py-[8px] border-2 border-[#27272A]'>
                Click Me
              </button>
            </div>
          </div>
          {/* <button className='mt-5 select-none rounded-md px-4 py-2 bg-transparent border border-white space-x-2'>
            <span>Components</span>
            <span className='text-xs bg-[#565656] p-1 rounded-full'>64</span>


          </button> */}

          <div className='flex items-center justify-center mt-5 gap-3'>
            <div className='bg-white text-black rounded-md p-1 select-none font-semibold'>
              Badge
            </div>

            <div className='bg-transparent text-[#2E7D32] border border-[#2E7D32] font-semibold p-1 rounded-md select-none'>
              Badge
            </div>

            <div className='relative border-white text-white border p-1 rounded-md select-none'>
              <div className='absolute size-3 -right-1 -top-1 p-1 bg-[#D32F2F] rounded-full'></div>
              <span>Badge</span>
            </div>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          <div className='rounded-[10px] bg-black border-2 border-[#27272A] px-5 py-5 gap-[15px] flex items-center flex-col justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors max-w-72 min-h-80'>
            <h1 className='text-3xl font-semibold'>Card</h1>
            <p className='text-sm text-[#545353] text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis laborum molestias quaerat deleniti possimus veritatis,
              numquam sunt repellat vitae quas ea itaque eius perferendis eos
              alias perspiciatis inventore autem culpa.
            </p>
            <button className='bg-[#1565C0] font-poppins rounded-[6px] px-[16px] py-[8px] w-full hover:bg-[#1565c0e1] transition-colors'>
              Click Me
            </button>
          </div>
        </div>
      </div>
      <div className='self-end rounded-[10px] bg-black border-2 border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors w-72 mt-3'>
        <input
          type='text'
          className='w-full placeholder:text-[#545353] bg-transparent outline-none'
          placeholder='Search'
        />
      </div>
      {/* <div className='self-center text-green-500 flex items-center w-96 mt-3 rounded-md border border-green-500 px-4 py-2 space-x-4 text-sm'>
        <CheckCircleIcon className='size-10' />
        <span>
          Lorem ipsum dolor sit amet consectetur. Ipsum suspendisse ridiculus in
          dolor leo{' '}
        </span>
      </div> */}
      <div className='self-center mt-3 w-96 border-2 border-[#1565C0] bg-black px-5 py-3 gap-[10px] rounded-[10px] flex items-center justify-start min-w-max'>
        <svg
          width='22'
          height='22'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z'
            stroke='#1565C0'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <p className='text-[#1565C0] text-[16px]'>
          This is an info variant of the alert!
        </p>
      </div>
    </div>
  );
};

export default DisplayCompoents;
