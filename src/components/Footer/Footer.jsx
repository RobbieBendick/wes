import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <i style={{ textAlign: "center", marginLeft: "20px", color: "#fff" }}>
      Robdog © {year}
    </i>
  );
}
export default Footer;
