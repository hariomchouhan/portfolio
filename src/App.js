import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { themeContext } from "./ContextAPI/ThemeContext";
import yellow from "./assets/yellow.png";
import red from "./assets/red.png";
import blue from "./assets/blue.png";
import blueviolet from "./assets/blueviolet.png";
import green from "./assets/green.png";
import magenta from "./assets/magenta.png";
import orange from "./assets/orange.png";
import purple from "./assets/purple.png";
import yellowgreen from "./assets/yellowgreen.png";
import { toast } from "react-hot-toast";
import { projectData } from "./Data/ProjectData";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage";
import ScrollButton from "./Components/ScrollButton";

function App() {
  const { setColor, setBoxShadow } = useContext(themeContext);
  const filteredData = projectData?.slice(0, 6);
  return (
    <div className={`bg-slate-200`}>
      <Header />
      <div className="pt-28 w-[90%] md:w-11/12 mx-auto max-w-[1280px] relative flex">
        <div className="mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home data={filteredData} />} />
            <Route
              path="/projects"
              element={<ProjectPage projectData={projectData} />}
            />
          </Routes>
        </div>
        <div className="fixed mt-[2rem] right-[0.5rem] flex flex-col gap-3">
          <img
            src={yellow}
            alt=""
            onClick={() => {
              setColor("rgb(255 180 0)");
              setBoxShadow("0 12px 15px 1px rgb(255 180 0)");
              toast.success("Apply Yellow Theme!");
            }}
          />
          <img
            src={red}
            alt=""
            onClick={() => {
              setColor("#f72b1c");
              setBoxShadow("0 12px 15px 1px #f72b1c");
              toast.success("Apply Red Theme!");
            }}
          />
          <img
            src={blue}
            alt=""
            onClick={() => {
              setColor("#4169e1");
              setBoxShadow("0 12px 15px 1px #4169e1");
              toast.success("Apply Blue Theme!");
            }}
          />
          <img
            src={blueviolet}
            alt=""
            onClick={() => {
              setColor("#8a2be2");
              setBoxShadow("0 12px 15px 1px #8a2be2");
              toast.success("Apply Blue Violet Theme!");
            }}
          />
          <img
            src={green}
            alt=""
            onClick={() => {
              setColor("#72b626");
              setBoxShadow("0 12px 15px 1px #72b626");
              toast.success("Apply Green Theme!");
            }}
          />
          <img
            src={magenta}
            alt=""
            onClick={() => {
              setColor("#ee6192");
              setBoxShadow("0 12px 15px 1px #ee6192");
              toast.success("Apply Magenta Theme!");
            }}
          />
          <img
            src={orange}
            alt=""
            onClick={() => {
              setColor("#fa5b0f");
              setBoxShadow("0 12px 15px 1px #fa5b0f");
              toast.success("Apply Orange Theme!");
            }}
          />
          <img
            src={purple}
            alt=""
            onClick={() => {
              setColor("#6957af");
              setBoxShadow("0 12px 15px 1px #6957af");
              toast.success("Apply Purple Theme!");
            }}
          />
          <img
            src={yellowgreen}
            alt=""
            onClick={() => {
              setColor("#9acd32");
              setBoxShadow("0 12px 15px 1px #9acd32");
              toast.success("Apply YellowGreen Theme!");
            }}
          />
        </div>
      </div>
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
