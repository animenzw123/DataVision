import React from "react";
import DEMO from "./../../../../../store/constant";
const navLogo = (props) => {
  let toggleClass = ["mobile-menu"];
  if (props.collapseMenu) {
    toggleClass = [...toggleClass, "on"];
  }
  return (
      <div className="navbar-brand header-logo">
        <a href={DEMO.BLANK_LINK} className="b-brand">
          <span className="b-title">Data Vision</span>
        </a>
        <a
          href={DEMO.BLANK_LINK}
          className={toggleClass.join(" ")}
          id="mobile-collapse"
          onClick={props.onToggleNavigation}
        >
          <span />
        </a>
      </div>

  );
};

export default navLogo;
