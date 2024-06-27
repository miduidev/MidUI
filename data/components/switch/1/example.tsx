'use client';
import { useState } from 'react';

export function Switch() {
  const [enabled, setEnabled] = useState(false);
  return (
    <button
      className={`${
        enabled ? 'bg-[#1565C0]' : 'bg-[#0a2246]'
      } h-6 w-12 rounded-full relative inline-flex items-center transition-colors`}
      onClick={() => setEnabled((e) => !e)}
    >
      <div
        className={`h-5 w-5 rounded-full bg-white absolute left-1 ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } transition-all`}
      />
    </button>
  );
}
