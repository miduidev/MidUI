import { headers } from "next/headers";

const Shortcut = () => {
  const hds = headers();
  const isMac = !hds.get("user-agent")?.includes("Mac");
  return (
    <span>
      {isMac ? (
        <span className="text-[10px]">⌘ + K</span>
      ) : (
        <span className="text-[8px]">CTRL + K</span>
      )}
    </span>
  );
};

export default Shortcut;
