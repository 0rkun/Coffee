import Image from "next/image";
import React from "react";

interface ServiceItemProps {
  id: number;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  img,
  name,
  description,
  aosDelay,
}) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-once="false"
      data-aos-delay={aosDelay}
      className="rounded-2xl bg-white group hover:bg-orange-300/50 relative cursor-pointer shadow-lg max-w-72"
    >
      <div className="h-44">
        <Image
          alt=""
          src={img}
          width={200}
          height={200}
          className="mx-auto transform -translate-y-14 group-hover:scale-110 transition duration-500"
        ></Image>
      </div>
      <div className="p-4 text-center">
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 font-bold">
            {name}
          </h1>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
