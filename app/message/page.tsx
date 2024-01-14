"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MessagePreview from "@/components/MessagePreview";
import SendBtn from "@/components/SendBtn";
import { ErrorMessage } from "@hookform/error-message";
import useFriendModalStore from "@/hooks/friendModalStore";
import FriendsModal from "@/components/FriendsModal";

interface MessageForm {
  text: string;
  link: string;
}

interface MessageType {
  object_type: string;
  text: string;
  link: {
    web_url: string;
    mobile_web_url: string;
    android_execution_params: string;
    ios_execution_params: string;
  };
}

interface SendResponse {
  ok: boolean;
  error?: string;
}

function getMessage({ text, link }: MessageForm): MessageType {
  return {
    object_type: "text",
    text,
    link: {
      web_url: link,
      mobile_web_url: link,
      android_execution_params: link,
      ios_execution_params: link,
    },
  };
}

const Message = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MessageForm>();
  const messageForm = watch();
  const { isModalOpen, setModalOpen } = useFriendModalStore((state) => state);

  const sendMe = (form: MessageForm) => {
    const message = getMessage(form);

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

  const sendFriends = () => {
    setModalOpen();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 backdrop-blur-lg p-10 rounded-md">
      <MessagePreview messageForm={messageForm} />
      <form className="flex flex-col items-center gap-2">
        <div>
          <div className="flex items-center">
            <p className="text-lg font-semibold pb-1 px-2">메세지</p>
            <ErrorMessage
              errors={errors}
              name="text"
              render={({ message }) => {
                return <div className="text-red-400">{message}</div>;
              }}
            />
          </div>
          <div className="bg-white p-3 rounded-md">
            <textarea
              placeholder="메세지를 입력해주세요. (최대 200자)"
              rows={5}
              className="w-[254px] rounded-md ring-1 ring-blue-300 focus-visible:ring-blue-700 outline-none text-sm p-1"
              {...register("text", {
                required: "메세지를 입력해주세요.",
                maxLength: {
                  message: "메세지는 최대 200자 까지만 입력 가능합니다.",
                  value: 200,
                },
              })}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-lg font-semibold pb-1 px-2">링크 주소</p>
            <ErrorMessage
              errors={errors}
              name="link"
              render={({ message }) => {
                return <div className="text-red-400">{message}</div>;
              }}
            />
          </div>
          <div className="bg-white p-3">
            <input
              placeholder="메세지 클릭시 이동할 링크를 적어주세요."
              className="w-[254px] border rounded-md border-blue-300 text-sm p-1 focus:border-blue-700 outline-none"
              {...register("link")}
            />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <SendBtn onClick={handleSubmit(sendMe)}>나에게 보내기</SendBtn>
          <SendBtn onClick={handleSubmit(sendFriends)} disabled={true}>
            친구에게 보내기
          </SendBtn>
        </div>
      </form>
      {isModalOpen ? <FriendsModal /> : null}
    </div>
  );
};

export default Message;
