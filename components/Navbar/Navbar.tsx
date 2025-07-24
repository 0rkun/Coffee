import Image from "next/image";
import React from "react";
import NavbarItem from "./NavbarItem";
import { FaCoffee } from "react-icons/fa";
import OrderButton from "../Button/OrderButton";
import Link from "next/link";

const Menu = [
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

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-300/55 shadow-lg text-white ">
      <div className="container p-5 ">
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="flex items-center justify-evenly"
        >
          <div
            className="font-extrabold text-xl 
            lg:text-3xl md:text-2xl flex items-center justify-center gap-4 
          "
          >
            <Image
              src="/images/logo/1.png"
              alt="logo1"
              className="bg-white rounded-full p-1"
              width={50}
              height={50}
            />
            <Link href="/">CoffeePub</Link>
          </div>
          <div className="hidden lg:flex items-center gap-3 justify-between">
            <ul>
              {Menu.map((menu) => (
                <NavbarItem
                  key={menu.id}
                  link={menu.link}
                  name={menu.name}
                ></NavbarItem>
              ))}
            </ul>
          </div>
          <OrderButton icon={FaCoffee} label="Order" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
