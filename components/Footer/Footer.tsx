import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterMenu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
];

const Footer = () => {
  return (
    <div className="bg-[url('/images/f1.jpg')] min-h-[380px] bg-[center_70%] bg-no-repeat bg-cover w-full h-full">
      <div className=" flex items-center pt-36 justify-center">
        <div className="grid grid-cols-3 gap-10  place-items-center items-center">
          <div className="text-3xl md:text-4xl lg:text-6xl text-white font-extrabold bg-gradient-to-r from-orange-500/60 to-black p-4 rounded-2xl">
            COFFEEPUB
          </div>
          <div className="flex gap-4 text-1xl md:text-2xl lg:text-3xl ">
            {FooterMenu.map((menu) => (
              <div
                key={menu.id}
                className="bg-white rounded-full text-orange-700 p-4 text-2xl"
              >
                <Link href={menu.link}>{menu.name}</Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 text-3xl md:text-5xl lg:text-5xl text-white ">
            <Link href="/##">
              <FaFacebook />
            </Link>

            <Link href="/###">
              <FaSquareXTwitter />
            </Link>

            <Link href="/##?">
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
