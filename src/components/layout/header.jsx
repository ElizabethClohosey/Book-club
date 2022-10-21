import React from "react";
import LogoLight from "../../assets/images/logo-light.png";
import LogoDark from "../../assets/images/logo-dark.png";
import { MdWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi";

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
          style={{ height: "25px" }}
          src={darkMode ? LogoDark : LogoLight}
          alt="book club bitches text above books"
        />
        <div className="theme-wrapper" onClick={toggleDarkMode}>
          <div className="theme">
            <button>
              <HiMoon />
            </button>
            <button>
              <MdWbSunny />
            </button>
          </div>
          <div className="toggle-theme"></div>
        </div>
        {/* <p>Menu</p> */}
      </div>
    </header>
  );
};

export default Header;
