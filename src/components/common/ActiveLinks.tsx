"use client";

import { TActiveLinksProps } from "@/app/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLinks = ({ url, children, icon }: TActiveLinksProps) => {
  const pathName = usePathname();
  const isActive = url === pathName;
  return (
    <Link
      href={url}
      className={`
        p-3 rounded-md flex items-center gap-3  transition-all ${
          isActive
            ? "text-white font-medium dark:text-[#eeedef] bg-primary svg-animate "
            : "hover:text-primary hover:bg-primary hover:bg-opacity-10"
        }`}
    >
      {icon}
      {children}
    </Link>
  );
};

export default ActiveLinks;
