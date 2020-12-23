import React from "react";
import "./Header.css";
import useWindowSize from "../hooks/useWindowSize";

function Header() {
  const windowSize = useWindowSize();

  function smoothScroll() {
    document.querySelector("#map").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="navv">
      <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow header">
        {windowSize.width < 1000 && (
          <i style={{ color: "#fff" }} className="fas fa-bars fa-2x ml-4"></i>
        )}
        {windowSize.width >= 1001 && (
          <a className="navbar-brand ml-5" onClick={smoothScroll}>
            <i className="fas fa-home fa-2x"></i>
          </a>
        )}

        <div className="nav-right">
          <ul className="px-3 social">
            <a
              className="social-media-icon"
              href="https://www.twitch.tv/wayser"
            >
              <i className="fab fa-twitch"></i>
            </a>
            <a className="social-media-icon" href="#">
              <i className="fab fa-steam"></i>
            </a>
            <a
              className="social-media-icon"
              href="https://discordapp.com/users/125033567536283648"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              className="social-media-icon"
              href="https://www.last.fm/user/ifffy_"
            >
              <i className="fab fa-lastfm"></i>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
