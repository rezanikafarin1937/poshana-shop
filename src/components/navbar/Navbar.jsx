"use client";
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
    {
      title: "Store",
      link: "/store",
    },
  ];

  return (
    <nav>
      <ul className="shadow p-4 flex flex-row">
        {navs.map((nav, index) => (
          <li
            className={`ml-4 transition duration-300 ease-in-out ${
              pathName === nav.link ? "text-blue-600" : ""
            }`}
            key={index}
          >
            <Link href={nav.link}> {nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
