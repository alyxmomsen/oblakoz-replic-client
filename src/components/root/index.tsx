import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../nav-bar";
import Header from "../header";
import ModalWindowMenu from "../modal-window-menu";
import { main_context } from "../../App";

const RootBloodyRoot = () => {
  const mnctx = useContext(main_context);

  return (
    <div className="main-wrapper">
      <Header />
      <h1>R00t, Bl00dy R00t</h1>
      <Outlet />
      {mnctx.model.isModalOpen && <ModalWindowMenu />}
    </div>
  );
};

export default RootBloodyRoot;
