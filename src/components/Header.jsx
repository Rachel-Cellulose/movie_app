import React from "react";
import MainMenu from "./MainMenu";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkMode from "./DarkMode";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-6">
        <MainMenu title="home" address="/" Icon={AiFillHome} />
        {/* <MainMenu title="about" address="/" Icon={BsFillInfoCircleFill} /> */}
      </div>
      <div className="flex items-center gap-6">
        <DarkMode/>
        <Link href={"/"} className="">
          <span className="text-2xl py-1 px-2 bg-blue-600 font-bold rounded-lg ">
            iCode
          </span>
        </Link>
      </div>
    </div>
  );
}
