"use client";

import Image from "next/image";
import { useState } from "react";

const RoketDiv = () => (
  <div className="w-5 h-5 m-3 -translate-y-[2.7px]">🚀</div>
);
const KatalkDiv = () => (
  <div className="m-3">
    <Image width={20} height={20} src={"/kakaoImage.png"} alt="kakaoImage" />
  </div>
);

const RepeatDiv = (cnt: number) =>
  Array.from({ length: 1000 }, (_, index) => {
    if (cnt % 2 !== 0 || Math.floor(index / cnt) % 2 === 0) {
      if (index % 2 === 0) return <RoketDiv key={index} />;
      if (index % 2 === 1) return <KatalkDiv key={index} />;
    }

    if (index % 2 === 1) return <RoketDiv key={index} />;
    if (index % 2 === 0) return <KatalkDiv key={index} />;
  });

const HomeBackground = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  const oneColCnt = Math.floor(width / 44);

  return (
    <div className="opacity-60 blur-sm absolute w-screen h-screen -z-10">
      <div className="grid grid-cols-repeat-fit justify-center w-full items-center">
        {RepeatDiv(oneColCnt)}
      </div>
    </div>
  );
};

export default HomeBackground;
