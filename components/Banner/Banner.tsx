import Image from "next/image";
import React from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { SiCoffeescript } from "react-icons/si";

const Banner = () => {
  return (
    <div
      className="bg-[url('/images/h1.jpg')] bg-center
    bg-no-repeat bg-cover h-screen w-full"
    >
      <div
        className="min-h-[550px] flex justify-center items-center
        py-12"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <Image
                src="/images/2.png"
                alt=""
                width={420}
                height={420}
                className="spinOne mx-auto"
              ></Image>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1
                data-aos="fade-up"
                className="text-3xl md:text-4xl font-bold "
              >
                Premium Coffee
              </h1>

              <p
                data-aos="fade-up"
                className="text-xl md:text-2xl text-gray-600 "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                autem explicabo odio doloremque consequatur provident.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-5">
                  <div className="flex items-center gap-3" data-aos="fade-up">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm rounded-full bg-red-400 p-1 " />
                    <span className="font-semibold "> Premium Coffee </span>
                  </div>

                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <BiSolidCoffeeBean className="text-2xl h-12 w-12 shadow-lg rounded-full bg-amber-200 p-1 " />
                    <span className="font-semibold "> Hot Coffee </span>
                  </div>

                  <div
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    <SiCoffeescript className="text-2xl h-12 w-12 shadow-sm rounded-full bg-blue-300 p-1 " />
                    <span className="font-semibold "> Cream Coffee </span>
                  </div>
                </div>

                <div
                  className="border-l-4 border-orange-400/40 space-y-2 pl-6"
                  data-aos="slide-left"
                >
                  <h1 className="text-2xl md:text-3xl font-bold ">Tea Lover</h1>
                  <p className="text-gray-500 text-sm ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nulla temporibus beatae iure ducimus nesciunt. Natus
                    praesentium dolorum velit blanditiis deleniti at molestias
                    odio enim, dolor repellat facilis ut eveniet nulla!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex md:translate-y-56 justify-center text-3xl md:text-5xl font-semibold ">
        <div
          className="bg-gradient-to-r from-orange-500/65 to-orange-300/30 p-2 rounded-full shadow-lg "
          data-aos="fade-up"
        >
          Start your day with <strong>Coffee</strong>
        </div>
      </h1>
    </div>
  );
};

export default Banner;
