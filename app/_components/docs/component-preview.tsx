import { cn } from '@/utils/cn';
import { FC } from 'react';
import { ClassNameValue } from 'tailwind-merge';

type ComponentPreviewProps = {
  children: React.ReactNode;
  className?: ClassNameValue;
};

export const ComponentPreview = ({
  children,
  className,
}: ComponentPreviewProps) => {
  return (
    <div
      className={cn(
        'bg-[#111111] rounded-[10px] relative',
        'overflow-x-auto overflow-y-hidden z-[1]',
        className
      )}
    >
      <div className='px-[50px] py-[20px] overflow-x-auto flex justify-center gap-x-[15px] min-w-max relative'>
        <div className='z-[-1] inset-0 absolute h-full w-full bg-[linear-gradient(#0D92FC,transparent_1px)] [background-size:10px_10px] opacity-5'></div>
        <div className='z-[-1] inset-0 absolute h-full w-full bg-[linear-gradient(90deg,#0D92FC_1px,transparent_1px)] [background-size:10px_10px] opacity-5'></div>
        {children}
      </div>
    </div>
  );
};
