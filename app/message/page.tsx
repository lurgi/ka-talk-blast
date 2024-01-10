"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MessagePreview from "@/components/MessagePreview";
import SendBtn from "@/components/SendBtn";

interface MessageForm {
  text: string;
  link: string;
}

interface SendResponse {
  ok: boolean;
  error?: string;
}

const Message = () => {
  const { register, handleSubmit } = useForm<MessageForm>();

  const sendMe = async (form: MessageForm) => {
    const message = {
      object_type: "text",
      text: form.text,
      link: {
        web_url: form.link,
        mobile_web_url: form.link,
        android_execution_params: form.link,
        ios_execution_params: form.link,
      },
    };

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

  const sendFriends = async (form: MessageForm) => {
    const message = {
      object_type: "text",
      text: form.text,
      link: {
        web_url: form.link,
        mobile_web_url: form.link,
        android_execution_params: form.link,
        ios_execution_params: form.link,
      },
    };
    console.log(message);
    // fetch("/api/message/send-me", {
    //   method: "POST",
    //   body: JSON.stringify(message),
    // })
    //   .then((res) => res.json())
    //   .then((json: SendResponse) => {
    //     if (json.ok) {
    //       toast.success("나에게 메세지를 보냈습니다!");
    //     }
    //     if (!json.ok && json.error) {
    //       toast.error(json.error);
    //     }
    //   });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 backdrop-blur-lg p-10 rounded-md">
      <MessagePreview />
      <form className="flex flex-col items-center gap-2">
        <div>
          <p className="text-lg font-semibold pb-1 px-2">메세지</p>
          <div className="bg-white p-3 rounded-md">
            <textarea
              rows={5}
              className="w-[254px] rounded-md ring-1 ring-blue-300 focus-visible:ring-blue-700 outline-none text-sm p-1"
              {...register("text")}
            />
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold pb-1 px-2">링크 주소</p>
          <div className="bg-white p-3">
            <input
              className="w-[254px] border rounded-md border-blue-300 text-sm p-1 focus:border-blue-700 outline-none"
              {...register("link")}
            />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <SendBtn onClick={handleSubmit(sendMe)}>나에게 보내기</SendBtn>
          <SendBtn onClick={handleSubmit(sendFriends)}>친구에게 보내기</SendBtn>
        </div>
      </form>
    </div>
  );
};

export default Message;
