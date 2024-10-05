import React from "react";
import MainMenu from "./MainMenu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-6">
        <MainMenu title="home" address="/" Icon={AiFillHome} />
        <MainMenu title="about" address="/" Icon={BsFillInfoCircleFill} />
      </div>

      <Link href={'/'} className="">
        <span className="text-2xl py-1 px-2 bg-gray-300 font-bold rounded-lg color-white">iCode</span>
        
      </Link>
    </div>
  );
}
