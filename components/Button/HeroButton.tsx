import React from "react";
import { IconType } from "react-icons";

interface HeroButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ icon: Icon, label }) => {
  return (
    <button className="bg-gradient-to-r from-orange-600 to-orange-300/80 shadow-lg text-black gap-4 flex items-center justify-center p-3 rounded-full uppercase font-extrabold hover:scale-105 duration-700 transition cursor-pointer">
      {label} {Icon && <Icon />}
    </button>
  );
};

export default HeroButton;
