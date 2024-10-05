'use client';
import { useEffect, useState } from 'react';

export function Progress() {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 10));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='bg-gray-900 rounded-full flex items-start w-full md:w-1/2 h-3 md:h-5 overflow-hidden'>
      <div
        className={`h-full w-full bg-[#1565C0] rounded-full transition-all`}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      ></div>
    </div>
  );
}
