"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../constants/data";
import { INavbar } from "../types/type";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-transition");
    
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDark(savedTheme);
    document.body.classList.toggle("dark", savedTheme);
    
    requestAnimationFrame(() => {
      document.body.classList.remove("no-transition");
    });
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.body.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  // ...existing code...
  return (
    <nav className="bg-transparent flex items-center px-10 py-7 justify-between">
      <div className="flex gap-6">
        {navLinks.map(({ name, url }: INavbar) => (
          <a href={url} key={name}>
            {name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-7">
        <a href="#contact"> Contact me</a>
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