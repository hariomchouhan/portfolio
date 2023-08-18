import React, { useContext } from "react";
import { themeContext } from "../ContextAPI/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {color} = useContext(themeContext);
  return (
    <div className="w-[100%] gap-3 h-[80px] flex-row justify-center mx-auto flex items-center bg-[#004aad]" style={{background: `${color}`}}>
      <Link to='/' className="text-white text-5xl font-bold text-center mx-auto cursor-pointer">
      Hari ॐ
      </Link>
      <Link to='/projects' className="text-white text-2xl font-bold text-center mx-auto cursor-pointer">
      Projects
      </Link>
    </div>
  );
};

export default Header;
