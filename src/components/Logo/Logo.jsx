import React from "react";
import logo from "../../assets/imgs/logo.png";
const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <img className="w-10" src={logo} alt="Logo.png" />
        <h2 className="text-xl font-bold text-shadow-xs">
          TAXI <span className="text-amber-400">KITCHEN</span>
        </h2>
      </div>
    </>
  );
};

export default Logo;
