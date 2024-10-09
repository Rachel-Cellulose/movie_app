import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-blue-700 bg-gray-200 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarItem title="Trending" param="fetchtrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
}
