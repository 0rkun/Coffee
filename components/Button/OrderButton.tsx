import React from "react";
import { IconType } from "react-icons";

interface OrderButtonProps {
  icon: IconType;
  onClick?: () => void;
  label: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({ icon: Icon, label }) => {
  return (
    <button className="bg-black gap-4 flex shadow-lg items-center px-6 p-4 rounded-full upppercase font-extrabold hover:scale-105 duration-700 transition cursor-pointer ">
      {label} {Icon && <Icon />}
    </button>
  );
};

export default OrderButton;
