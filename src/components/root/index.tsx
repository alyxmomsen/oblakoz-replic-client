import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../nav-bar";
import Header from "../header";
import ModalWindowMenu from "../modal-window-menu";
import { main_context } from "../../App";
import CategoriesLinksWrapper from "../categories-links-module";

const RootBloodyRoot = () => {
  const mnctx = useContext(main_context);

  useEffect(() => {
    // console.log('use effect' , mnctx.model.articlesFilter);
  }, []);

  return (
    <div className="main-wrapper">
      <Header />
      {/* <CategoriesLinksWrapper /> */}
      <Outlet />
      {mnctx.model.isModalOpen && <ModalWindowMenu />}
    </div>
  );
};

export default RootBloodyRoot;
