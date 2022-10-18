import React from "react";
import Logo from "../../assets/images/logo-sm.png";

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: '0 .5rem'
        }}
      >
        <img
          style={{ height: "35px" }}
          src={Logo}
          alt="book club bitches text above books"
        />
        <p>Menu</p>
      </div>
    </header>
  );
};

export default Header;
