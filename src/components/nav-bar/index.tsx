import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="regular-wrapper">
      <Link to={"/"}>root</Link>
      <span> </span>
      <Link to={"/home"}>home</Link>
      <span> </span>
      <Link to={"/about"}>about</Link>
      <span> </span>
      <Link to={"/account"}>account</Link>
      <span> </span>
      <Link to={"/articles"}>articles</Link>
      <span> </span>
      <Link to={"/auth/registration"}>registration</Link>
      <span> </span>
      <Link to={"/auth/login"}>login</Link>
      <span> </span>
      <Link to={"/auth"}>auth</Link>
    </div>
  );
};

export default NavBar;
