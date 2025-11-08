"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathName = usePathname();
    const navs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <>
      <ul className="bg-blue-400 p-4 flex flex-row">
        {navs.map((nav, index) => (
          <li className={`ml-4 transition delay-150 duration-300 ease-in-out ${pathName === nav.link ? "text-amber-50" : "#333"}`} key={index}>
            <Link href={nav.link}> {nav.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
