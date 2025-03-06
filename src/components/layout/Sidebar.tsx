"use client";
import { menuItems } from "@/constants";
import { ActiveLinks } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import Link from "next/link";
import { IconNext, IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
      <div className="p-5">
        <a href="/" className="font-bold text-3xl inline-block mb-5">
          <span className="text-primary">U</span>
          cademy
        </a>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <ActiveLinks key={index} url={item.url}>
              {item.icon}
              {item.title}
            </ActiveLinks>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex items-center justify-between dark:bg-[#0000005d] bg-opacity-10 mx-5 mb-5 p-3 rounded-lg border border-gray-500 dark:border-opacity-50">
        {!userId ? (
          <>
            <Link
              href="/sign-in"
              className="flex items-center justify-center gap-2 px-3 py-[7px] text-sm rounded-md text-white font-bold bg-[#8a67ff] hover:text-primary hover:bg-primary hover:bg-opacity-10 duration-150 ease-in-out"
            >
              Start Now
              <IconNext className="size-3 animate-bounce-right" />
            </Link>
            <ModeToggle />
          </>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
