"use client";
import toast from "react-hot-toast";

const Message = () => {
  const message = {
    object_type: "text",
    text: "테스트용 메세지 입니다.",
    link: {
      web_url: "naver.com",
      mobile_web_url: "m.naver.com",
      android_execution_params: "m.naver.com",
      ios_execution_params: "m.naver.com",
    },
  };

  const sendMe = async () => {
    fetch("/api/message/send-me", {
      method: "POST",
      body: JSON.stringify(message),
    }).then((r) => console.log(r));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      Message 라우트
      <button onClick={sendMe}>나에게 보내기</button>
      <button>친구에게 보내기</button>
    </div>
  );
};

export default Message;
