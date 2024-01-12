import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("kakaoAccessToken")?.value;

  const res = await (
    await fetch("https://kapi.kakao.com/v1/api/talk/friends", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  ).json();

  console.log(res);
  return NextResponse.json({ ok: true });
}
