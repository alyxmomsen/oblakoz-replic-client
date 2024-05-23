import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../nav-bar";
import Header from "../header";
import ModalWindowMenu from "../modal-window-menu";
import { main_context } from "../../App";
import CategoriesLinksWrapper from "../categories-links-module";
import ArticlesFilter from "../articles-filter-module";
import Articles from "../articles";

const RootBloodyRoot = () => {
  const mnctx = useContext(main_context);

  return (
    <div className="main-wrapper">
      <Header />
      <CategoriesLinksWrapper />
      <ArticlesFilter />
      <Articles />
      <Outlet />
      {mnctx.model.isModalOpen && <ModalWindowMenu />}
      <h1>R00t, Bl00dy R00t</h1>
    </div>
  );
};

export default RootBloodyRoot;
