"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import toast from "react-hot-toast";
import { RiLoader2Line } from "react-icons/ri";
import useSWR from "swr";

async function getToken(code: string) {
  return await (
    await fetch("/api/kakaoToken", {
      method: "POST",
      body: JSON.stringify({ code }),
    })
  ).json();
}

const Auth = () => {
  const params = useSearchParams();
  const code = params.get("code");
  const router = useRouter();

  if (!code) {
    router.push("/");
    toast.error("something wrong");
  }
  const { data } = useSWR(["kakaoToken"], () => getToken(code!));

  useEffect(() => {
    if (data && data.ok) {
      router.push("/message");
    }
    if (data && !data.ok) {
      router.push("/");
      toast.error(data.error);
    }
  }, [data, router]);

  return (
    <div className="py-5 px-10 flex flex-col gap-2 items-center backdrop-blur-lg rounded-lg">
      <p className="text-lg font-semibold ">로그인 중입니다...</p>
      <RiLoader2Line size={30} className="animate-spin" />
    </div>
  );
};

export default Auth;
