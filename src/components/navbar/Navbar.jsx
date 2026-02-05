"use client";
import { redirect, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Container from "../container/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import UserIcon from "../icons/UserIcon";
import ShoppingIcon from "../icons/ShoppingIcon";
import Cookies from "js-cookie";
import GlobalSearch from "../global-search/GlobalSearch";
import SearchIcon from "../search/icons/SearchIcon";
import Logo from "../logo/Logo";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navs = [
    // {
    //   title: "صفحه اصلی",
    //   link: "/",
    // },
    {
      title: "فروشگاه",
      link: "/store",
    },
    {
      title: "مردانه",
      link: "/menswear",
    },
    {
      title: "زنانه",
      link: "/feminine",
    },
    {
      title: "کودک",
      link: "/kidswear",
    },

    // {
    //   title: "درباره ما",
    //   link: "/about",
    // },
    // {
    //   title: "داشبورد",
    //   link: "/dashboard",
    // },
  ];

  const { cartTotalQty } = useShoppingCartContext();

  return (
<div className="fixed top-0 left-0 w-full z-101 max-[769px]:!bg-white">
<div className="shadow p-4 min-h-[50px] min-[769px]:hidden flex flex-row-reverse font-bold justify-between items-center">
  <h2 className="font-bold text-xl text-[var(--active-text)]">پوشانا</h2>
  <div className="flex bg-red w-[80px] h-full justify-center items-center">
    <span className="w-[40px] relative top-1"><SearchIcon color="var(--active-text)"/></span>
     <span className="w-[40px]"><ShoppingIcon/></span>
    
  </div>
</div>
<nav className="max-[769px]:hidden p-4 sticky top-0 z-3000  bg-[#f8f2f2] shadow bg-white text-[1rem] rounded-bl-2xl rounded-br-2xl">
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse items-center">
          <Logo/>
          <ul
            className="p-4 flex flex-row items-center max-h-[50px] text-[var(--global-text)]"
            dir="rtl"
          >
            {navs.map((nav, index) => (
              <li
                className={`ml-4 transition duration-300 ease-in-out ${
                  pathName === nav.link ? "text-[var(--active-text)]" : ""
                }`}
                key={index}
              >
                <Link href={nav.link}> {nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <GlobalSearch />
        <ul className="text-[1rem] font-bold w-1/5 flex items-center">
          {/* <li className="w-[150px]  bg-blue-400 flex flex-row justify-between align-">
            <span className="px-2 py-1 bg-red-600 text-white rounded-full">
              {cartTotalQty}
            </span>
            <span className="mx-8"></span>
            <Link href="/cart">سبد خرید</Link>
            <button
              onClick={() => {
                Cookies.remove("token");
                redirect("/");
              }}
              className="ml-4 bg-red-600 text-white px-4 py-1 rounded hover:cursor-pointer"
            >
              خروج
            </button>
          </li> */}
          <button
            onClick={() => router.push("/login")}
            className="bg-[var(--active-text)] font-thin  text-white flex justify-between items-center cursor-pointer px-4 rounded"
          >
            <span className="flex items-center h-[50px]">
              <UserIcon />
            </span>
            <span className="mr-1"></span>
            <Link href="/login">
              <span className="font-thin text-[14px]">ورود \ عضویت</span>
            </Link>
          </button>
          {/* <div className="flex justify-between"> */}
          <Link href="/cart">
            <span className="cursor-pointer ml-4 h-[50px] flex flex-col justify-center text-center text-[var(--active-text)]">
              <div className="w-full flex justify-center">
                <span className="text-center flex justify-center items-center text-[12px]">
                  {cartTotalQty.toLocaleString("fa")}
                </span>
              </div>
              <span className="flex justify-center items-center">
                <ShoppingIcon />
              </span>
              <span className="text-center font-thin text-xs flex justify-center">
                سبد خرید
              </span>
            </span>
          </Link>
          {/* </div> */}
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
