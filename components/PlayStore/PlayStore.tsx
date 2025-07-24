import Image from "next/image";
import React from "react";

const PlayStore = () => {
  return (
    <div className="bg-[url('/images/beans2.jpg')] bg-[center_40%] bg-no-repeat bg-cover h-full w-full p-60 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div data-aos="fade-up" data-aos-duration="200" className="">
            <h1 className="text-white text-2xl  md:text-4xl   font-semibold ">
              Coffee cafe is avaliable for Android and IOS
            </h1>
            <div className="flex flex-wrap justify-center items-center mt-3">
              <Image
                src="/images/app_store.png"
                alt=""
                width={200}
                height={300}
              />

              <Image
                src="/images/play_store.png"
                alt=""
                width={200}
                height={300}
              />
            </div>
          </div>

          <div data-aos="fade-up" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;
