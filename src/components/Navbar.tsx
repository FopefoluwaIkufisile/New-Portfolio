"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../constants/data";
import { INavbar } from "../types/type";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="flex flex-col max-md:gap-4 md:flex-row items-center md:justify-between px-10 py-7 bg-transparent ">
      <div className="flex gap-6 max-md:flex-wrap max-md:items-center">
        {navLinks.map(({ name, url }: INavbar) => (
          <a href={url} key={name}>
            {name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <a href="#contact">Contact me</a>
        <button onClick={toggleTheme}>
          {dark ? <MdDarkMode className="size-7" /> : <MdOutlineLightMode className="size-7" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
