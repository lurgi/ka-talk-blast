import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res: Response) {
  const text = await res.json();
  const coocieStore = cookies();

  const access_token = coocieStore.get("kakaoAccessToken")?.value;

  try {
    const res = await fetch(
      "https://kapi.kakao.com/v2/api/talk/memo/default/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        body: new URLSearchParams({ template_object: JSON.stringify(text) }),
      }
    );
    const json = await res.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
