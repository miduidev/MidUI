"use client"

const Shortcut = () => {
    const isMac =
    typeof window !== "undefined"
      ? navigator.userAgent.toUpperCase().indexOf("MAC") >= 0
      : false;
  return (
    <span>{isMac?<span className="text-xl">⌘</span> : "CTRL"} + K</span>
  )
}

export default Shortcut;