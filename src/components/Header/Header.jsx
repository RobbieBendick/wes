import React from "react";
import "./Header.css"

function Header() {
  return (
    <div>
    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow header">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 icon" href="#map"><i className="fas fa-home fa-2x"></i></a>
          <div className="nav-right">
          <ul className="navbar-nav px-3 navbar-right">
            <a className="social-media-icon" href="https://www.twitch.tv/wayser">
                <i className="fab fa-twitch"></i>
            </a>
            <a className="social-media-icon" href="#">
                <i className="fab fa-steam"></i>
            </a>
            <a className="social-media-icon" href="https://discordapp.com/users/125033567536283648">
                <i className="fab fa-discord"></i>
            </a>
            <a className="social-media-icon" href="https://www.last.fm/user/ifffy_">
                <i className="fab fa-lastfm"></i>
            </a>
          </ul>
          </div>
    </nav>
    </div>

  );
}

export default Header;