import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <i style={{ textAlign: "center", marginLeft: "20px", color: "#fff" }}>
        Robdog © {year}
      </i>
      <a
        style={{ paddingLeft: "10px", color: "#fff" }}
        href="http://www.twitter.com/mageiden"
      >
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  );
}
export default Footer;
