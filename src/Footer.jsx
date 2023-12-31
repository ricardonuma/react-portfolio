import React from "react";
import "./App.css";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="footer">
      Made with{" "}
      <img
        src="images/heart.png"
        width="25px"
        alt="heart"
        style={{ marginBottom: -7 }}
      />{" "}
      in Vancouver-CAN
      <br />
      <br />
      &copy; {getCurrentYear()} by Ricardo Numa
    </div>
  );
};

export default Footer;
