export function Card() {
  return (
    <div className="flex justify-center w-full">
      <div className="rounded-[10px] bg-[#111111] border-2 border-[#27272A] px-5 py-5 gap-[15px] flex flex-col justify-start focus-within:border-2 focus-within:border-[#1565C0] transition-colors max-w-72 min-h-80 items-start">
      <h1 className="text-3xl font-semibold">Card</h1>
      <p className="text-sm text-[#545353]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum molestias quaerat deleniti possimus veritatis, numquam sunt repellat vitae quas ea itaque eius perferendis eos alias perspiciatis inventore autem culpa.</p>
      <button className="bg-[#1565C0] font-poppins rounded-[6px] px-[24px] py-[10px] w-32">
        Click Me
      </button>
      </div>
    </div>
  );
}