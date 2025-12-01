"use client";

import { useTheme } from "./providers/ThemeProvider";

const Home = () => {
  const { dark, toggleTheme } = useTheme();
  return <div className={`${dark ? "bg-[#1a1a1a]" : "bg-[#E0E8F6]"} border-2 border-green-500 h-40`}></div>;
};

export default Home;
