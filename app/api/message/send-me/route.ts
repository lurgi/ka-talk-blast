import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const text = await req.json();
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
    if (json.result_code === 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json({ ok: false, error: json.msg }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
