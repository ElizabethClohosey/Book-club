import React from "react";

const Header = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
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
