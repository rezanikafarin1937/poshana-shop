"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import GlobalSearch from "../global-search/GlobalSearch";
import Logo from "../logo/Logo";
import { ShoppingIcon, UserLogin } from "@/icons";
// import UserIcon from "@/icons/UserIcon";

const Navbar = () => {
  const pathName = usePathname();

  const router = useRouter();

  console.log("pathName = ", pathName);

  const navs = [
    { title: "فروشگاه", link: "/" },
    { title: "مردانه", link: "/menswear/" },
    { title: "زنانه", link: "/feminine/" },
    { title: "کودک", link: "/kidswear/" },
    { title: "تماس", link: "/contact/" },
  ];

  const { cartTotalQty } = useShoppingCartContext();

  return (
    <div className="fixed top-0 left-0 w-full z-101 max-[769px]:!bg-white max-md:justify-between">
      <nav className="max-[376px]:px-2 p-4 sticky top-0 z-3000 bg-[#f8f2f2] shadow bg-white text-[1rem] rounded-bl-2xl rounded-br-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />

            <ul
              className="max-[769px]:hidden p-4 flex flex-row items-center max-h-[50px] text-[var(--global-text)] text-sm"
              dir="rtl"
            >
              {navs.map((nav, index) => (
                <li
                  className={`ml-4 transition duration-300 ease-in-out ${
                    pathName === nav.link
                      ? "text-[var(--active-text)] border-b"
                      : ""
                  }`}
                  key={index}
                >
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <GlobalSearch />

          <ul className="text-[1rem] font-bold w-1/5 flex items-center justify-end">
            <Link href="/cart">
              <span className="cursor-pointer  h-[50px] flex flex-col justify-center text-center text-[var(--active-text)]">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-center flex justify-center items-center text-[12px]">
                    {cartTotalQty.toLocaleString("fa")}
                  </span>

                  <span>
                    <ShoppingIcon width="25px" height="25px" />
                  </span>

                  <span className="whitespace-nowrap text-center font-thin text-xs">
                    سبد خرید
                  </span>
                </div>
              </span>
            </Link>

            <button
              onClick={() => router.push("/login")}
              className="mr-2 max-[769px]:hidden whitespace-nowrap bg-[var(--active-text)] font-thin  text-white flex justify-between items-center cursor-pointer px-6 py-0 rounded"
            >
              <Link href="/login">
                <span className="whitespace-nowrap- font-thin text-[12px]">
                  ورود \ عضویت
                </span>
              </Link>
              <span className="mx-2"></span>
              <span className="flex items-center h-[50px]">
                <UserLogin width="15px" height="15px" color="#fff" />
              </span>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import { useShoppingCartContext } from "@/context/ShoppingCartContext";
// import GlobalSearch from "../global-search/GlobalSearch";
// import Logo from "../logo/Logo";
// import { ShoppingIcon, UserIcon } from "@/icons";

// const Navbar = () => {
//   const pathName = usePathname();
//   const router = useRouter();
//   const navs = [
//     {
//       title: "فروشگاه",
//       link: "/store",
//     },
//     {
//       title: "مردانه",
//       link: "/menswear",
//     },
//     {
//       title: "زنانه",
//       link: "/feminine",
//     },
//     {
//       title: "کودک",
//       link: "/kidswear",
//     },
//     {
//       title: "تماس",
//       link: "/contact",
//     },
//   ];

//   const { cartTotalQty } = useShoppingCartContext();

//   return (
//     <div className="sticky top-0 left-0 w-full z-101 max-[769px]:!bg-white max-md:justify-between">
//       <nav className=" max-[376px]:px-0 p-4 sticky top-0 z-3000  bg-[#f8f2f2] shadow bg-white text-[1rem] rounded-bl-2xl rounded-br-2xl">
//         <div className="flex flex-row-reverse justify-between items-center">
//           <div className="flex flex-row-reverse items-center">
//             <Logo />
//             <ul
//               className="max-[769px]:hidden p-4 flex flex-row items-center max-h-[50px] text-[var(--global-text)] text-sm"
//               dir="rtl"
//             >
//               {navs.map((nav, index) => (
//                 <li
//                   className={`py-1 ml-4 transition duration-300 ease-in-out ${
//                     pathName === nav.link ? "text-[var(--active-text)] border-b py-1" : ""
//                   }`}
//                   key={index}
//                 >
//                   <Link href={nav.link}> {nav.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <GlobalSearch />
//           <ul className="text-[1rem] font-bold w-1/5 flex items-center">
//             <button
//               onClick={() => router.push("/login")}
//               className="max-[769px]:hidden whitespace-nowrap bg-[var(--active-text)] font-thin  text-white flex justify-between items-center cursor-pointer px-6 py-0 rounded"
//             >
//               <span className="flex items-center h-[50px]">
//                 <UserIcon />
//               </span>
//               <span className="mx-1"></span>
//               <Link href="/login">
//                 <span className="whitespace-nowrap- font-thin text-[12px]">ورود \ عضویت</span>
//               </Link>
//             </button>
//             <Link href="/cart">
//               <span className="cursor-pointer ml-4 h-[50px] flex flex-col justify-center text-center text-[var(--active-text)]">
//                 <div className="flex flex-col justify-center items-center">
//                   <span className="text-center flex justify-center items-center text-[12px]">
//                     {cartTotalQty.toLocaleString("fa")}
//                   </span>
//                   <span>
//                     <ShoppingIcon width="25px" height="25px" />
//                   </span>
//                   <span className="whitespace-nowrap text-center font-thin text-xs">
//                     سبد خرید
//                   </span>
//                 </div>
//               </span>
//             </Link>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
