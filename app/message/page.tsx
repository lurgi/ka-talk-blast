"use client";
import toast from "react-hot-toast";

interface SendResponse {
  ok: boolean;
  error?: string;
}

const Message = () => {
  const message = {
    object_type: "text",
    text: "테스트용 메세지 입니다.",
    link: {
      web_url: "https://www.naver.com/",
      mobile_web_url: "https://www.m.naver.com/",
      android_execution_params: "https://www.m.naver.com/",
      ios_execution_params: "https://www.m.naver.com/",
    },
  };

  const sendMe = async () => {
    fetch("/api/message/send-me", {
      method: "POST",
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((json: SendResponse) => {
        if (json.ok) {
          toast.success("나에게 메세지를 보냈습니다!");
        }
        if (!json.ok && json.error) {
          toast.error(json.error);
        }
      });
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
