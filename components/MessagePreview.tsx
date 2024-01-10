import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const MessagePreview = () => {
  return (
    <div>
      <p className="text-lg font-semibold pb-1 px-2">메세지 미리보기</p>
      <div className="flex flex-col p-3 bg-white rounded-md gap-2">
        <div className="text-sm w-[254px] break-words">
          abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV
        </div>
        <button className="py-3 w-full bg-neutral-100 rounded-md">
          자세히 보기
        </button>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              alt="roket"
              className="border rounded-md mr-2"
              width={20}
              height={20}
              src="/roket.jpg"
            />
            <span className="text-xs text-neutral-500">깨톡발사!</span>
          </div>
          <FaChevronRight className="text-neutral-500" size={12} />
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;
