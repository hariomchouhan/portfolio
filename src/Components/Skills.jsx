import React, { useContext } from "react";
import Resume from "../Data/resume.pdf";
import { themeContext } from "../ContextAPI/ThemeContext";
const Skills = () => {
  const skillsData = [
    "React",
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
  ];

  const { color, boxShadow } = useContext(themeContext)
  return (
    <div className="w-full justify-between flex flex-col md:flex-row py-20 mb-8 gap-16 md:gap-0">
      {/* left side */}
      <div className="w-full px-4 flex flex-col justify-center md:justify-start items-center md:items-start">
        <h2 className="text-[4rem] font-bold text-[#242d49]">
          <span>My</span> <span>Skills</span>
        </h2>
        <h2 className="text-[4rem] font-bold text-blue-700" style={{color: `${color}`}}>
          <span>&</span> <span>Eduction</span>
        </h2>
        <a
          className="mt-8 cursor-pointer rounded-[34px] text-white text-[16px] py-[11px] px-[26px] bg-blue-700 shadow-xl shadow-blue-700 font-semibold"
          style={{background: `${color}`, boxShadow: `${boxShadow}`}}
          href={Resume}
          download
        >
          <button>Download Resume</button>
        </a>
      </div>

      {/* right side */}
      <div className="w-full flex flex-wrap justify-center items-center gap-[40px]">
        <div className="flex justify-center items-center gap-[20px] flex-wrap">
          {skillsData.map((data, index) => (
            <span
              className="py-[8px] px-[12px] rounded-[8px] bg-[#e1e8ef] text-xl"
              key={index}
            >
              {data}
            </span>
          ))}
        </div>

        <div className="w-96 h-[5px] bg-[#004aad] mx-auto rounded-2xl" style={{background: `${color}`}}></div>
        <p className="text-xl text-center">
          Bachelor in Technology in Computer Science Of Information Technology
          Engineering :{" "}
          <span style={{color: `${color}`}} className="text-[#004aad] text-[1.3rem] font-[500]">
            7.59 CGPA
          </span>{" "}
          Acropolis Institute of Technology and Research, Indore (M.P)
        </p>
      </div>
    </div>
  );
};

export default Skills;
