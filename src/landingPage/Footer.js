import React from "react";
import Logo from "../assets/imgs/traviea-logo.png";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto">
      <div className="container flex flex-col items-center gap-5 py-20 mx-auto font-semibold tracking-tight text-[.9rem] text-center px-7 th:flex-row th:text-left th:grid th:grid-cols-[.8fr_1.2fr_1.05fr_1.2fr] th:px-0">
        <div className="mb-2">
          <img src={Logo} alt="Travira Air" />
        </div>
        <div className="">
          <a href="mailto:commercial@travira-air.com" className="">
            commercial@travira-air.com
          </a>
        </div>
        <div className="">
          <p className="">Graha Paramita 3rd Floor</p>
        </div>
        <div className="">
          <p className="">
            Jl. Denpasar Raya Blok D-2 Kav.8 Kuningan Jakarta 12940, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
