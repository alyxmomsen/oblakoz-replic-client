import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header";
import ModalWindowMenu from "../../components/modal-window-menu";
import { main_context } from "../../App";

const RooootBloodyRoooot = () => {
  const mnctx = useContext(main_context);

  useEffect(() => {}, []);

  return (
    <div className="main-wrapper">
      <Header />
      {/* <CategoriesLinksWrapper /> */}
      <Outlet />
      {mnctx.model.isModalOpen && <ModalWindowMenu />}
    </div>
  );
};

export default RooootBloodyRoooot;
