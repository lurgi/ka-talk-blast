import LoginBtn from "./components/LoginBtn";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 backdrop-blur-lg p-10 rounded-md">
      <p className="font-extrabold text-3xl mb-5">🚀카톡 발사🚀</p>
      <p className="font-bold">대량의 카카오톡 메세지를 쉽게 보내보세요!</p>
      <LoginBtn />
    </div>
  );
}
