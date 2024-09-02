import React, { useContext } from "react";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { themeContext } from "../ContextAPI/ThemeContext";
import { RiTwitterXFill } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  const { color } = useContext(themeContext);
  return (
    <>
      <div
        className="w-[90%] h-[5px] bg-[#004aad] mx-auto rounded-2xl"
        style={{ background: `${color}` }}
      ></div>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-around items-center w-full py-8">
        <p className="text-lg">@ 2024, All Right Reserved</p>
        <p className="text-lg flex justify-center items-center">
          Designed by &nbsp;
          <p className="flex justify-center items-center">
            <span
              className="text-[#004aad] font-semibold"
              style={{ color: `${color}` }}
            >
              Hariom Chouhan
            </span>
          </p>
        </p>
        <div className="flex gap-[1.8rem] text-[#004aad] text-4xl">
          <Link
            to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a"
            style={{ color: `${color}` }}
          >
            <AiOutlineLinkedin />
          </Link>
          <Link
            to="https://github.com/hariomchouhan"
            style={{ color: `${color}` }}
          >
            <AiFillGithub />
          </Link>
          <Link
            style={{ color: `${color}` }}
            to="https://twitter.com/Hari_om_Chouhan"
          >
            <RiTwitterXFill />
          </Link>
          <Link
            style={{ color: `${color}` }}
            to="https://stackoverflow.com/users/19839122/hariom-chouhan"
          >
            <FaStackOverflow />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
