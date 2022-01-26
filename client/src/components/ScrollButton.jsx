import React, { useEffect, useState } from "react";
import "./scrollButton.css";

const ScrollButton = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setToggle(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={toggle ? "redirect-button" : "redirect-button display"}>
      <a href="#redirect">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default ScrollButton;
