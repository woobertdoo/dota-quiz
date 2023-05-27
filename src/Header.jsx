import React from "react";
import dotaLogo from "./dota_logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <h1>Dota</h1>
      <img src={dotaLogo} alt="Dota 2 Logo" />
      <h1>Quiz</h1>
      <Nav />
    </div>
  );
};

export default Header;
