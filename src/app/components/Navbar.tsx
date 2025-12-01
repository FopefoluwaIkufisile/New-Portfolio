"use client";

import { navLinks } from "../constants/data";
import Link from "next/link";
import { INavbar } from "../types/type";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../providers/ThemeProvider";

const Navbar = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <div className="border-2 border-red-500 bg-transparent flex items-center px-10 py-7 justify-between">
      <div className="flex gap-6">
        {navLinks.map(({ name, url }: INavbar) => (
          <Link href={url} key={name}>
            {name}
          </Link>
        ))}
      </div>
      <div onClick={toggleTheme} className="cursor-pointer">
        {dark ? (
          <MdDarkMode className="size-7" />
        ) : (
          <MdOutlineLightMode className="size-7" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
