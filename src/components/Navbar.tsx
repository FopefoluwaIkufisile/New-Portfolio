"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../constants/data";
import { INavbar } from "../types/type";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <nav className="flex flex-col max-md:gap-4 md:flex-row items-center md:justify-between px-10 py-7 bg-transparent ">
      <div className="flex gap-6 max-md:flex-wrap max-md:items-center">
        {navLinks.map(({ name, url }: INavbar) => (
          <a href={url} key={name} className="font-medium">
            {name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-7">
        <a href="#contact">Contact me</a>
        <button onClick={toggleTheme} className="cursor-pointer">
          {dark ? (
            <MdDarkMode className="size-7" />
          ) : (
            <MdOutlineLightMode className="size-7" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
