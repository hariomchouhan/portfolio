import React, { useContext } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import myPic from "../assets/Home.png"
import { themeContext } from "../ContextAPI/ThemeContext";


const HeroSection = () => {
  const {color} = useContext(themeContext);
  return (
    <div className="w-[100%] justify-between flex flex-col md:flex-row gap-14 md:gap-0 items-center mt-[2.5rem]">
      {/* left side */}
      <div className="flex relative flex-1 flex-col">
        <div className="flex flex-col gap-3">
          <span className="text-[#242d49] font-bold text-5xl">Hy! I Am</span>
          <span className="text-[#004aad] font-bold text-5xl" style={{color: `${color}`}}>Hariom Chouhan</span>
          <span className="font-extralight mt-[10px] text-[#788097] text-[14px]">
          Frontend Developer with High level of Experience in Web Designing
            and Development, producing the Quality work.
          </span>
        </div>

        <div className="mt-[2rem] p-[1.89rem] flex gap-[4rem]">
          <Link className="transform scale-[4] text-[#004aad]" style={{color: `${color}`}} to="https://github.com/hariomchouhan">
            <AiFillGithub />
          </Link>
          <Link className="transform scale-[4] text-[#004aad]" style={{color: `${color}`}} to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>

      {/* right side */}
        <img
          src={myPic}
          alt="Hariom Chouhan"
          className="w-[25rem]"
          draggable="false"
        />
    </div>
  );
};

export default HeroSection;
