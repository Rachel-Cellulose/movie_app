import Link from "next/link";
import React from "react";

export default function MainMenu({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-gray-500">
      <Icon className="text-2xl sm:hidden"/>
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
