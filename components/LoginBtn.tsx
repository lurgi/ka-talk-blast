"use client";

const LoginBtn = () => {
  const handleClick = () => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      window.Kakao.Auth.authorize({
        redirectUri: `${
          process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
        }/auth`,
        scope: "talk_message,friends",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-yellow-200 py-2 px-14 w-3/4 rounded-md font-semibold hover:bg-yellow-400 hover:cursor-pointer transition">
      카카오 로그인
    </button>
  );
};

export default LoginBtn;
