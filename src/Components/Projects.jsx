import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { themeContext } from "../ContextAPI/ThemeContext";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Projects = ({ data }) => {
  const { color } = useContext(themeContext);
  const location = useLocation();
  const fullUrl = location.pathname;
  // console.log(fullUrl);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };
  return (
    <div className="flex w-full mb-20 gap-8 flex-col">
      <h2 className="text-4xl md:text-5xl text-center font-bold">
        <span className="text-[#242d49]">Project</span>{" "}
        <span className="text-[#004aad]" style={{ color: `${color}` }}>
          Portfolio
        </span>
      </h2>
      <div
        className="w-20 h-[5px] bg-[#004aad] mx-auto rounded-2xl"
        style={{ background: `${color}` }}
      ></div>
      <div className="flex justify-around items-center gap-y-12 gap-x-16 flex-wrap h-fit">
        {data?.map((data, index) => (
          <Link
            key={index}
            to={data.link}
            target="_blank"
            className="decoration-0	transition-all duration-200 hover:scale-110"
          >
            <img
              src={data.img}
              alt={data.title}
              loading="lazy"
              className="w-80 rounded-2xl shadow-2xl"
              draggable="false"
            />
            <p
              className="text-2xl text-center mt-2 text-[#004aad] font-semibold w-80"
              style={{ color: `${color}` }}
            >
              {data.title}
            </p>
          </Link>
        ))}
        {fullUrl === "/projects" ? (
          ""
        ) : (
          <Link
            to="/projects"
            className="text-2xl font-semibold not-sr-onlyunderline text-center text-[#004aad] cursor-pointer hover:underline flex justify-center items-center gap-3"
            style={{ color: `${color}` }}
            onClick={scrollToTop}
          >
            See All Projects
            <BsFillArrowRightCircleFill className="flex justify-center items-center" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Projects;
