import React, { useContext } from "react";
import { main_context } from "../../App";
import { Link } from "react-router-dom";

const Header = () => {
  const mnctx = useContext(main_context);

  return (
    <header className="regular-wrapper">
        <Link to={'/'}><img
        alt="logo"
        srcSet="https://oblakoz.ru/_next/static/media/logo_with_title_without_padding.af4c105a.svg"
      /></Link>
      
      <button
        onClick={() => {
          if (mnctx.controller.mainDispatch) {
            mnctx.controller.mainDispatch({
              type: "modal-open",
              payload: { isModalOpen: !mnctx.model.isModalOpen },
            });
          }
        }}
      >
        click me
      </button>
    </header>
  );
};

export default Header;