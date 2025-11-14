"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../Container";

const Navbar = () => {
  const pathName = usePathname();
  const navs = [
    {
      title: "صفحه اصلی",
      link: "/",
    },
    {
      title: "درباره ما",
      link: "/about",
    },
    {
      title: "فروشگاه",
      link: "/store",
    },
  ];

  return (
    <nav className="bg-gray-300">
      <Container>
        <div className="flex flex-row-reverse justify-between">
          <ul className="p-4 flex flex-row text-[1rem] font-bold">
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
          <ul className="p-4 text-[1rem] font-bold">
            <li>
              <Link href="/cart">سبد خرید</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
