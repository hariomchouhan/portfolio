import React, { useContext } from "react";
import Resume from "../Data/resume.pdf";
import { themeContext } from "../ContextAPI/ThemeContext";
import { BiSolidDownload } from 'react-icons/bi'
import toast from "react-hot-toast";
const Skills = () => {
  const skillsData = [
    "React",
    "React PWA",
    "JavaScript",
    "HTML 5",
    "CSS 3",
    "Node",
    "Express",
    "Mongo DB",
    "TailwindCSS",
    "Bootstrap",
    "Git",
    "Figma",
    "Thunderclient",
    "Postman",
    "VS Code"
  ];

  const { color, boxShadow } = useContext(themeContext);
  return (
    <div className="w-full justify-between flex flex-col md:flex-row py-20 mb-8 gap-16 md:gap-0">
      {/* left side */}
      <div className="w-full px-4 flex flex-col justify-center md:justify-start items-center md:items-start">
        <h2 className="text-[4rem] font-bold text-[#242d49]">
          <span>My</span> <span>Skills</span>
        </h2>
        <h2
          className="text-[4rem] font-bold text-blue-700"
          style={{ color: `${color}` }}
        >
          <span>&</span> <span>Eduction</span>
        </h2>
        <a
          className="mt-8 cursor-pointer rounded-[34px] text-white text-[16px] py-[11px] px-[26px] bg-blue-700 shadow-xl shadow-blue-700 font-semibold flex justify-center items-center gap-3 group"
          style={{ background: `${color}`, boxShadow: `${boxShadow}` }}
          href={Resume}
          onClick={() => {window.open(Resume, "_blank"); toast.success("Resume Download Successfully!")}}
          download
        >
          <button>Download Resume
          </button>
            <BiSolidDownload  fontSize={22} className="group-hover:animate-bounce"/>
        </a>
      </div>

      {/* right side */}
      <div className="w-full flex flex-wrap justify-center items-center gap-[40px]">
        <div className="flex justify-center items-center gap-[20px] flex-wrap">
          {skillsData.map((data, index) => (
            <span
              className="py-[8px] px-[12px] rounded-[8px] bg-slate-300 text-xl md:hover:scale-110 transition-all duration-400"
              key={index}
            >
              {data}
            </span>
          ))}
        </div>

        <div
          className="w-48 md:w-96 h-[5px] bg-[#004aad] mx-auto rounded-2xl"
          style={{ background: `${color}` }}
        ></div>
        <p className="text-xl text-center">
          Bachelor in Technology in Computer Science Of Information Technology
          Engineering :{" "}
          <span
            style={{ color: `${color}` }}
            className="text-[#004aad] text-[1.3rem] font-[500]"
          >
            7.59 CGPA
          </span>{" "}
          Acropolis Institute of Technology and Research, Indore (M.P)
        </p>
      </div>
    </div>
  );
};

export default Skills;
