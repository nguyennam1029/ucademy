import { menuItems } from "@/constants";
import { ActiveLinks } from "../common";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
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
      <div className="mt-auto flex items-center justify-between">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
