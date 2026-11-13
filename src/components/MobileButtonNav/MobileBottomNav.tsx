
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.scss";
import {
  StoreIcon,
  MenIcon,
  WomenIcon,
  ChildIcon,
  UserLogin,
} from "@/icons";

const navs = [
  { key: "store", title: "فروشگاه", icon: StoreIcon, link: "/store" },
  { key: "men", title: "مردانه", icon: MenIcon, link: "/menswear" },
  { key: "women", title: "زنانه", icon: WomenIcon, link: "/feminine" },
  { key: "child", title: "کودک", icon: ChildIcon, link: "/kidswear" },
  { key: "login", title: "لاگین", icon: UserLogin, link: "/login" },
];
const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className={styles.navbar}
      aria-label="منوی اصلی موبایل"
    >
      {navs.map((nav) => {
        const Icon = nav.icon;
        const isActive = pathname === nav.link;

        return (
          <Link
            className={`${styles.navbar__item} ${
              isActive ? styles.navbar__active : ""
            }`}
            href={nav.link}
            key={nav.key}
            aria-current={isActive ? "page" : undefined}
          >
            <Icon aria-hidden="true" color={isActive ? "#e06c69" : "#000000"} />
            <span>{nav.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;






// "use client"
// import {
//   HomeIcon,
//   ProductsIcon,
//   ServicesIcon,
//   AboutIcon,
//   ContactIcon,
// } from "@/icons";


// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import styles from "./MobileBottomNav.module.scss";

// const navs = [
//     {key : "home",title : "خانه" , icon : "", link : "/"},
//     {key : "products",title : "نمونه کارها" , icon : "", link : "/portfolio"},
//     {key : "services",title : "خدمات" , icon : "", link : "/services"},
//     {key : "about",title : "درباره من" , icon : "", link : "/about"},
//     {key : "contact",title : "تماس" , icon : "", link : "/contact"},
// ]


// const mobileIcons = {
//   home: HomeIcon,
//   products: ProductsIcon,
//   services: ServicesIcon,
//   about: AboutIcon,
//   contact: ContactIcon,
// };


// const MobileBottomNav = () => {

//     const pathname = usePathname();

//     return (
//     <nav className={styles.navbar}>
//       {navs.map((nav,index) => {
//         const Icon = nav.icon;
//         return(
//         <Link className={`${styles.navbar__item} ${pathname === nav.link ? styles.navbar__active : ""}`} href={nav.link} key={index}>  
//              <Icon />
//              {nav.title}
//         </Link>
// )})}
//     </nav>
//   )
// }

// export default MobileBottomNav
