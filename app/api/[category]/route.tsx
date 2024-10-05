import { ImageResponse } from "next/og";
import Logo from "@/assets/logo.svg";
import { NextRequest } from "next/server";
import { transformCategory } from "@/utils";

export const runtime = "edge";

export const GET = async (
  _: NextRequest,
  { params: { category } }: { params: { category: string } }
) => {
  try {
    return new ImageResponse(
      (
        <div tw="flex flex-col items-center justify-center bg-white h-full w-full bg-[#141414] text-white">
          <div tw="flex items-center justify-center gap-2">
            <Logo
              style={{
                width: 100,
                height: 100,
              }}
            />
            <h1 tw="text-6xl mb-1  ml-2">
              {transformCategory(category)} - MidUI
            </h1>
          </div>
        </div>
      )
    );
  } catch (e) {
    console.log(e);
  }
};
