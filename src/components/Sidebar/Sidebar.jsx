import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="navbar-expand-lg d-none d-md-block sidebar">
      <div className="sidebar-sticky sidebar-content">
        <ul className="nav flex-column mb-2 rob">
          <ListItem title="Map" href="chat" />
          <ListItem title="Chat" href="raidframes" />
          <ListItem title="Raidframes" href="unitframes" />
          <ListItem title="Unitframes" href="actionbar" />
          <ListItem title="Actionbar" href="questing" />
          <ListItem title="Questing" href="textures" />
          <ListItem title="Textures/Icons" href="minimap" />
          <ListItem title="Minimap" href="buffs" />
          <ListItem title="Buffs/Debuffs" href="swingtimer" />
          <ListItem title="Swingtimer" href="footer" />
        </ul>
      </div>
    </nav>
  );
}

function ListItem({ title, href }) {
  function smoothScroll() {
    document.querySelector("#" + href).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  return (
    <li>
      <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <a onClick={smoothScroll} className={`nav-link sidebar-title ${title}`}>
          {title}
        </a>
      </h5>
    </li>
  );
}

export default Sidebar;
