"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

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
    {
      title : "داشبورد",
      link : "/dashboard"
    }
  ];

  const {cartTotalQty} = useShoppingCartContext()

  return (
    <nav className="bg-gray-300">
      <Container>
        <div className="flex flex-row-reverse justify-between">
          <ul className="p-4 flex flex-row text-[1rem] font-bold" dir="rtl">
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
            <li className="w-[150px]  bg-blue-400 flex flex-row justify-between align-">
              <span className="px-2 py-1 bg-red-600 text-white rounded-full">{cartTotalQty}</span>
              <span className="mx-8"></span>
              <Link href="/cart">سبد خرید</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
