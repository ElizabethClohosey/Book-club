import React from "react";
import LogoLight from "../../assets/images/logo-light.png";
import LogoDark from "../../assets/images/logo-dark.png";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 .5rem",
        }}
      >
        <img
          style={{ height: "35px" }}
          src={darkMode ? LogoDark : LogoLight}
          alt="book club bitches text above books"
        />
        <div className="theme" onClick={toggleDarkMode}>
          <button>Dark</button>
          <button>Light</button>
        </div>
        {/* <p>Menu</p> */}
      </div>
    </header>
  );
};

export default Header;
