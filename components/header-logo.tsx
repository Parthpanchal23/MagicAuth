import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/vercel.svg" height={28} width={28} alt="logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">MagicAuth</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;