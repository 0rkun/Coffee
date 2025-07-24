import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <Link href={link}>
      <li className="inline-block text-xl py-4 px-4 hover:text-slate-700 transition duration-200 cursor-pointer">
        {name}
      </li>
    </Link>
  );
};

export default NavbarItem;
