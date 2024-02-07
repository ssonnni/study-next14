"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <>
      <ul>
        <li>
          <Link href="/">Home {path == "/" && "🔥"}</Link>
        </li>
        <li>
          <Link href="/about">About {path == "/about" && "🔥"}</Link>
        </li>
      </ul>
    </>
  );
};
export default Navigation;
