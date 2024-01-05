import HomeBackground from "./components/HomeBackground";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <HomeBackground />
      <div className="flex flex-col justify-center items-center gap-5 backdrop-blur-lg p-10 rounded-md">
        <p className="font-extrabold text-3xl mb-5">🚀카톡 발사🚀</p>
        <p className="font-bold">대량의 카카오톡 메세지를 쉽게 보내보세요!</p>
        <button className="bg-yellow-200 py-2 px-14 w-3/4 rounded-md font-semibold hover:bg-yellow-400 hover:cursor-pointer transition">
          카카오 로그인
        </button>
      </div>
    </main>
  );
}
