"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <>
      <ul>
        <li>
          {/* href 파일시스템에 따른 라우트를 써주면 된다. */}
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
