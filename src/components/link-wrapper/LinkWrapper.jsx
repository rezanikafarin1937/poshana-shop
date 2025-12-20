"use client";

import Link from "next/link";

export default function LinkWrapper({ href = "", children }) {
  return <Link href={href}>{children}</Link>;
}
