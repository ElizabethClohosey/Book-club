import React, { useState } from "react";
import Version from "../common/version";

const Footer = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleComingSoon = (e) => {
    e.preventDefault();
    setShowComingSoon(!showComingSoon);
  };

  return (
    <footer>
      {showComingSoon && (
        <p style={{ background: "orange" }}>
          Developer Information Coming Soon
        </p>
      )}
      <button
        style={{ background: "none", textDecoration: "underline", border: 'none' }}
        onClick={(e) => handleComingSoon(e)}
      >
        Developer Information
      </button>
      {/* <a onClick={(e) => handleComingSoon(e)} href="#">
        Developer Information
      </a> */}
      <Version />
    </footer>
  );
};

export default Footer;
