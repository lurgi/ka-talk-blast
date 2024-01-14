"use client";
import useFriendModalStore from "@/hooks/friendModalStore";

import { IoMdClose } from "react-icons/io";
import useSWR from "swr";

const getFriends = async () => {
  return (await fetch("/api/kakao-friends", { method: "GET" })).json();
};

const FriendsModal = () => {
  const { setModalClose } = useFriendModalStore((state) => state);
  const { data } = useSWR(["friends"], getFriends);

  return (
    <div className="absolute w-screen h-screen backdrop-blur-3xl bg-gray-400 flex flex-col items-center justify-center transition bg-opacity-30">
      <div className="flex flex-col gap-2 w-[358px] bg-white rounded-lg h-[500px] p-5">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">누구에게 보내시겠습니까?</p>
          <button
            className="aspect-square rounded-full hover:bg-neutral-100 transition p-1.5"
            onClick={setModalClose}>
            <IoMdClose size={25} />
          </button>
        </div>
        <div className="h-4/5">친구 목록</div>
        <div className="flex items-center justify-center">
          <button>메세지 보내기</button>
        </div>
      </div>
    </div>
  );
};

export default FriendsModal;
