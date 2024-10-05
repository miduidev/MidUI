const Badge = () => {
    return (
        <>
        <div className="relative border-white text-white border p-1 rounded-md select-none">
            <div className="absolute size-3 -right-1 -top-1 p-1 bg-[#D32F2F] rounded-full"></div>
            <span>Badge</span>
        </div>

        <div className="relative border-white text-white border p-1 rounded-md select-none">
            <span className="absolute -right-2 -top-1 p-0.5 bg-[#D32F2F] rounded-full text-[8px] text-white">100+</span>
            <span>Badge</span>
        </div>
        </>
    )
}

export default Badge;
