import { components } from "@/lib/emitter";
import { ImageResponse } from "next/og";
import Logo from "@/assets/logo.svg";
import { NextRequest } from "next/server";


export const GET = async (
  req: NextRequest,
  { params: { category } }: { params: { category: string } }
) => {
  const comp = components.find(
    (c) => c.metadata.category.toLowerCase() === category.toLowerCase()
  );

  if (!comp) return;

  try {
    return new ImageResponse(
      (
        <div tw="flex flex-col items-center justify-center bg-white h-full w-full bg-[#141414] text-white">
          <p>{comp.metadata.description}</p>
          <div tw="flex items-center justify-center gap-2">
            <Logo />
            <h1 tw="text-6xl">{category} - MidUI</h1>
          </div>
        </div>
      )
    );
  } catch (e) {
    console.log(e);
  }
};
