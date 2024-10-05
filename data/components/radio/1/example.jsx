const Radio = () => {
    return (
        <>
        <div className="flex space-x-2">
            <input className="size-5 accent-[#1565C0]" type="radio" name="radio" id="radio_yes" />
            <label htmlFor="radio_yes">Agree</label>
        </div>
        <div className="flex space-x-2">
            <input className="size-5 accent-[#D32F2F]" type="radio" name="radio" id="radio_no" />
            <label htmlFor="radio_no">Deny</label>
        </div>
        </>
    )
}

export default Radio;
