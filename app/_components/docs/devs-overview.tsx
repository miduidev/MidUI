import Link from 'next/link';
import React from 'react'

const DevsOverview = () => {
  return (
    <div className='flex w-full justify- items-center mt-2 mx-4 transition-all duration-300'>
        <Link target='_blank' className='hover:z-10 hover:scale-110 -mx-1 border border-white size-8 rounded-full' href={"https://github.com/shivam1608"}><img className='rounded-full' src="https://github.com/shivam1608.png" alt="shivzee" /></Link>
        <Link target='_blank' className='hover:z-10 hover:scale-110 -mx-1 border border-white size-8 rounded-full' href={"https://github.com/fero1xd"}><img className='rounded-full' src="https://github.com/fero1xd.png" alt="shivzee" /></Link>
        <Link target='_blank' className='hover:z-10 hover:scale-110 -mx-1 border border-white size-8 rounded-full' href={"https://github.com/dexfadee"}><img className='rounded-full' src="https://github.com/dexfadee.png" alt="shivzee" /></Link>
    </div>
  )
}

export default DevsOverview;