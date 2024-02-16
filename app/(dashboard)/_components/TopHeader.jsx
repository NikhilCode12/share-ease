"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

function TopHeader() {
  return (
    <div className="flex p-[1.05rem] border-b border-gray-700 items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden text-gray-200" />
      {/* logo */}
      <Image
        src="/icon.png"
        width={42}
        height={42}
        alt="icon"
        className="md:hidden object-contain"
      />
      <UserButton />
    </div>
  );
}

export default TopHeader;
