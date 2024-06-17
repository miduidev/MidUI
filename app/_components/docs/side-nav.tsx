'use client';

import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { categories } from '@/lib/emitter/components';
import Link from 'next/link';
import { ClassNameValue } from 'tailwind-merge';
import { transformCategory } from '@/utils';
import { contents } from '@/lib/emitter/docs';

type SideNavProps = {
  className?: ClassNameValue;
  input: React.ReactNode;
};

const SideNav = ({ className, input }: SideNavProps) => {
  const { category } = useParams() as { category?: string };
  const pathname = usePathname();

  return (
    <div className={cn('sticky top-0 h-max pt-10 shrink-0', className)}>
      {input}
      <div className='absolute w-full h-10 bg-gradient-to-b from-[#141414] to-transparent'></div>
      <div className='max-h-[85vh] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto pl-3 midui-scroll'>
        <h2 className='mt-8 font-semibold text-[18px] mb-3'>Documentation</h2>
        <div
          className={cn(
            'items-start justify-center flex flex-col',
            'py-[10px] gap-[12px]',
            'text-[#B2B2B2] text-[16px]'
          )}
        >
          {contents.map(({ slugAsParams, name }) => (
            <Link
              href={`/docs/${slugAsParams}`}
              key={slugAsParams}
              className={cn(
                pathname === `/docs/${slugAsParams}` && 'text-[#0D92FC]',
                'transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC] text-sm'
              )}
            >
              {name}
            </Link>
          ))}
        </div>

        <h2 className='mt-8 font-semibold text-[18px] mb-3'>Components</h2>

        <div
          className={cn(
            'items-start justify-center flex flex-col',
            'py-[10px] gap-[12px]',
            'text-[#B2B2B2] text-[16px]'
          )}
        >
          {categories.map((c) => (
            <Link
              href={`/docs/components/${c}`}
              key={c}
              className={cn(
                category === c && 'text-[#0D92FC]',
                'transition ease-in-out delay-100 hover:-translate-x-1 hover:text-[#0D92FC] text-sm'
              )}
            >
              {transformCategory(c)}
            </Link>
          ))}
          <div className='invisible mt-5'></div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
