
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileBottomNav.module.scss";

import {
  StoreIcon,
  MenIcon,
  WomenIcon,
  ChildIcon,
} from "@/icons";

const navs = [
  { key: "store", title: "فروشگاه", icon: StoreIcon, link: "/" },
  { key: "men", title: "مردانه", icon: MenIcon, link: "/menswear" },
  { key: "women", title: "زنانه", icon: WomenIcon, link: "/feminine" },
  { key: "child", title: "کودک", icon: ChildIcon, link: "/kidswear" },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} aria-label="منوی اصلی موبایل">
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
            <Icon
              aria-hidden="true"
              color={isActive ? "#e06c69" : "#000000"}
            />
            <span>{nav.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileBottomNav;
