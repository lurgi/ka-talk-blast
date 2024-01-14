import { NextResponse } from "next/server";
import { serialize } from "cookie";

interface TokenRes {
  access_token: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

const BASE_URL = "https://kauth.kakao.com/oauth/token";

export async function POST(req: Request) {
  const { code } = await req.json();
  if (!code) return new NextResponse("Unauthorized", { status: 401 });

  const grant_type = "authorization_code";
  const client_id = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
  const redirect_uri = `${
    process.env.VERCEL_URL || "http://localhost:3000"
  }/auth`;
  const client_secret = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!;

  try {
    const {
      access_token,
      refresh_token,
      expires_in,
      refresh_token_expires_in,
    }: TokenRes = await (
      await fetch(
        `${BASE_URL}?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}&client_secret=${client_secret}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
    ).json();

    console.log(access_token, refresh_token);

    const ACCESS_SERIALRIZE = serialize("kakaoAccessToken", access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: expires_in,
      path: "/",
    });

    const REFRESH_SERIALIZE = serialize("kakaoRefressToken", refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: refresh_token_expires_in,
      path: "/",
    });

    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: {
          "Set-Cookie": `${ACCESS_SERIALRIZE}, ${REFRESH_SERIALIZE}`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something In Kakao Token Server is wrong" },
      { status: 500 }
    );
  }
}
