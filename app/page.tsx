import Image from "next/image";
import HomeBackground from "./components/HomeBackground";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <HomeBackground />
      <button className="bg-yellow-50 py-2 px-16 rounded-md text-sm font-semibold hover:bg-yellow-100 hover:cursor-pointer transition">
        카카오 로그인
      </button>
    </main>
  );
}
