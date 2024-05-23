function Icon() {
    return (
        <svg className="size-6 opacity-30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
    )
}

export function Input() {
    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-[10px] border-2 border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors min-w-max">
                <Icon />
                <input
                    type="password"
                    className="w-full placeholder:text-[#545353] bg-transparent outline-none"
                    placeholder="Password"
                />
            </div>
            <div className="rounded-[10px] border-2 border-[#27272A] px-5 py-3 gap-[10px] flex items-center justify-center focus-within:border-2 focus-within:border-[#1565C0] transition-colors min-w-max">
                <input
                    type="password"
                    className="w-full placeholder:text-[#545353] bg-transparent outline-none"
                    placeholder="Password"
                />
                <Icon />
            </div>
        </div>
    );
}