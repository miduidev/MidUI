export function Avatar() {
    return (
        <div className="flex items-center space-x-3">

            
            {/* Online */}
            <div className="relative cursor-pointer size-16">
                <img className="ring-2 ring-[#404040] object-cover rounded-full" src="https://cataas.com/cat?width=300&height=300" alt="profile" />
                <div className="absolute rounded-full size-4 ring-1 ring-[#141414] bg-[#4BB543] bottom-0 right-0"></div>
            </div>

            {/* Idle */}
            <div className="relative cursor-pointer size-16">
                <img className="ring-2 ring-[#404040] object-cover rounded-full" src="https://cataas.com/cat?width=300&height=300" alt="profile" />
                <div className="absolute rounded-full size-4 ring-1 ring-[#141414] bg-[#FBC02D] bottom-0 right-0"></div>
            </div>

            {/* Do not disturb */}
            <div className="relative cursor-pointer size-16">
                <img className="ring-2 ring-[#404040] object-cover rounded-full" src="https://cataas.com/cat?width=300&height=300" alt="profile" />
                <div className="absolute rounded-full size-4 ring-1 ring-[#141414] bg-[#D32F2F] bottom-0 right-0"></div>
            </div>
            
        </div>
    )
}