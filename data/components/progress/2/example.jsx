'use client';
import { useEffect, useState } from 'react';

export function Progress() {
  const [progress, setProgress] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='relative bg-gray-800 rounded-full flex items-start w-full md:w-1/2 h-5 overflow-hidden'>
      <div
        className={`h-full w-full bg-[#4BB543] rounded-full transition-all`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      >
      </div>
      <span className='absolute text-white font-bold text-sm left-1/2'>{progress}%</span>
    </div>
  );
}
