import React from "react";
import HeroButton from "../Button/HeroButton";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

interface HeroItemProps {
  label1: string;
  label2: string;
  label3: string;
  src: string;
  text1: string;
  text2: string;
}

const HeroItem: React.FC<HeroItemProps> = ({
  label1,
  label2,
  label3,
  src,
  text1,
  text2,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center pt-10 gap-5 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans">
          {label1}
          {""}
          <span className="font-light bg-clip-text text-transparent bg-gradient-to-b from-orange-950 to-red-300">
            {" "}
            {label2}{" "}
          </span>
          {""}
          {label3}
        </h1>
        <div className="flex items-center justify-center">
          <HeroButton icon={BiChevronRight} label="Visit" />
        </div>
      </div>

      <div className="min-h-[450px] flex justify-center relative">
        <Image
          src={src}
          alt="coffe"
          width={420}
          height={400}
          className="spin mx-auto"
        ></Image>

        <div className="absolute bg-gradient-to-b font-bold from-orange-700 rounded-2xl shadow-md px-3 py-2 left-10 md:left-20 lg:left-40  top-10 md:top-1 lg:top-11 ">
          <h1 className=""> {text1}</h1>
        </div>

        <div className="absolute bg-gradient-to-b font-bold from-orange-700 rounded-2xl shadow-md px-3 py-2 right-10 md:right-20 lg:right-40  bottom-10 md:bottom-1 lg:bottom-11 ">
          <h1 className=""> {text2}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
