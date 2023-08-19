import React, { useContext, useEffect, useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import myPic from "../assets/Home.png";
import { themeContext } from "../ContextAPI/ThemeContext";
import { init } from "ityped";

const HeroSection = () => {
  const { color } = useContext(themeContext);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      loop: true,
      typeSpeed: 150,
      strings: ["React", "JavaScript", "TailwindCSS", "HTML 5", "CSS 3", "Node", "Express", "MongoDB", "Git", "GitHub", "Bootstrap", "Figma"],
    });
  }, []);

  return (
    <div className="w-[100%] justify-between flex flex-col md:flex-row gap-14 md:gap-0 items-center mt-[2.5rem]">
      {/* left side */}
      <div className="flex relative flex-1 flex-col">
        <div className="flex flex-col gap-6">
          <span className="text-[#242d49] font-bold text-5xl">Hy! I Am</span>
          <span
            className="text-[#004aad] font-bold text-5xl"
            style={{ color: `${color}` }}
          >
            Hariom Chouhan
          </span>
          <span className="w-[90%] font-extralight mt-[10px] text-[#788097] text-[14px]">
            Frontend Developer with High level of Experience in Web Designing
            and Development, producing the Quality work.
          </span>
          <span className="w-[90%] text-3xl font-bold text-[#242d49]">I have learn <span ref={textRef} style={{color: `${color}`}}></span></span>
        </div>

        <div className="mt-[2rem] p-[1.89rem] flex gap-[4rem]">
          <Link
            className="transform scale-[4] text-[#004aad]"
            style={{ color: `${color}` }}
            to="https://github.com/hariomchouhan"
          >
            <AiFillGithub />
          </Link>
          <Link
            className="transform scale-[4] text-[#004aad]"
            style={{ color: `${color}` }}
            to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a"
          >
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
