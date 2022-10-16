import React from "react";
import Logo from "../../assets/images/logo-sm.png";
const Header = () => {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
        <p>Logo</p>
        <p>Menu</p>
        {/* <img
          style={{ height: "55px" }}
          src={Logo}
          alt="book club bitches text above books"
        /> */}
      </div>
    </header>
  );
};

export default Header;
