import React, { useContext } from "react";
import { themeContext } from "../ContextAPI/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { color } = useContext(themeContext);
  return (
    <div
      className={`fixed z-10 w-[100%] gap-3 h-[80px] justify-around flex items-center shadow-md bg-slate-300`}
    >
      <Link
        to="/"
        className="text-white text-5xl font-bold text-center cursor-pointer"
        style={{ color: `${color}` }}
      >
        Hari ॐ
      </Link>
        <Link
          to="/projects"
          className="text-white text-2xl pt-1 pb-2 px-2 rounded-md font-bold text-center cursor-pointer hover:shadow-xl"
          style={{ background: `${color}` }}
        >
          Projects
        </Link>
    </div>
  );
};

export default Header;
