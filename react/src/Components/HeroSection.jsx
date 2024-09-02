import React, { useContext, useEffect, useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa";
import { Link } from "react-router-dom";
import myPic from "../assets/Home.webp";
import { themeContext } from "../ContextAPI/ThemeContext";
import { init } from "ityped";
import { FaCode } from "react-icons/fa6";
import ReactWhatsapp from "react-whatsapp";
import { BiLogoWhatsappSquare } from "react-icons/bi";

const HeroSection = () => {
  const { color, boxShadow } = useContext(themeContext);
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      loop: true,
      typeSpeed: 150,
      strings: [
        "React",
        "React PWA",
        "JavaScript",
        "TailwindCSS",
        "HTML 5",
        "CSS 3",
        "Node",
        "Express",
        "MongoDB",
        "Git",
        "GitHub",
        "Bootstrap",
        "Figma",
        "VS Code",
      ],
    });
  }, []);

  return (
    <div className="w-[100%] justify-between flex flex-col md:flex-row gap-14 md:gap-0 items-center mt-[2.5rem]">
      {/* left side */}
      <div className="flex relative flex-1 flex-col">
        <div className="flex flex-col gap-6">
          <span className="text-[#242d49] font-bold text-5xl">Hey! I Am</span>
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
          <span className="w-[90%] text-3xl font-bold text-[#242d49]">
            I have learn{" "}
            <span ref={textRef} style={{ color: `${color}` }}></span>
          </span>

          <ReactWhatsapp
            number="+91 9770994821"
            message=""
            className="w-[10rem] mt-8 cursor-pointer rounded-[34px] text-white text-[16px] py-[10px] px-[26px] bg-blue-700 shadow-xl shadow-blue-700 font-semibold flex justify-center items-center gap-3 group"
            style={{ background: `${color}`, boxShadow: `${boxShadow}` }}
          >
            <button>Hire Me!</button>
            <FaCode fontSize={22} className="animate-bounce" />
          </ReactWhatsapp>
        </div>

        <div className="mt-[2rem] p-[1.89rem] flex gap-[2.8rem] md:gap-[4rem] flex-wrap">
          <Link
            className="transform scale-[3] md:scale-[4] text-[#004aad] transition-all divide-fuchsia-200 md:hover:scale-[5]"
            style={{ color: `${color}` }}
            to="https://github.com/hariomchouhan"
          >
            <AiFillGithub />
          </Link>
          <Link
            className="transform scale-[3] md:scale-[4] text-[#004aad] transition-all divide-fuchsia-200 md:hover:scale-[5]"
            style={{ color: `${color}` }}
            to="https://www.linkedin.com/in/hariom-chouhan-ab6b7620a"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            className="transform scale-[3] md:scale-[4] text-[#004aad] transition-all divide-fuchsia-200 md:hover:scale-[5]"
            style={{ color: `${color}` }}
            to="https://twitter.com/Hari_om_Chouhan"
          >
            <RiTwitterXFill />
          </Link>
          <Link
            className="transform scale-[3] md:scale-[4] text-[#004aad] transition-all divide-fuchsia-200 md:hover:scale-[5]"
            style={{ color: `${color}` }}
            to="https://stackoverflow.com/users/19839122/hariom-chouhan"
          >
            <FaStackOverflow />
          </Link>
          <ReactWhatsapp
        number="+91 9770994821"
        message=""
        className="transform scale-[3] md:scale-[4] text-[#004aad] transition-all divide-fuchsia-200 md:hover:scale-[5]"
        style={{ color: `${color}` }}>
           <BiLogoWhatsappSquare  />
        </ReactWhatsapp>
        </div>
      </div>

      {/* right side */}
      <img
        src={myPic}
        alt="Hariom Chouhan"
        className="rounded-full w-[25rem] border-[6px] shadow-2xl border-[#004aad]"
        style={{ border: `6px solid ${color}` }}
        draggable="false"
        loading="lazy"
      />
    </div>
  );
};

export default HeroSection;
