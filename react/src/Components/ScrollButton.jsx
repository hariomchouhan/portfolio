import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BsArrowUpCircle } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    toast.success("Scroll To Top!")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <ReactWhatsapp
        number="+91 9770994821"
        message=""
        className="group fixed bottom-[20px] left-[20px] sm:left-[30px] text-center"
      >
        <BiLogoWhatsappSquare
          fontSize={50}
          className="text-green-600 animate-bounce"
        />
        <span className="hidden group-hover:block transition-all duration-800 group-hover:animate-bounce absolute bg-green-600 w-24 rounded-full text-sm text-white top-3 p-1 left-14 span">
          Hire Me!
        </span>
      </ReactWhatsapp>
      <BsArrowUpCircle
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        fontSize={30}
        className="fixed bottom-[40px] right-[20px] sm:right-[40px] text-center cursor-pointer"
      />
    </div>
  );
};

export default ScrollButton;