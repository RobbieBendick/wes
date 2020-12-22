import React from "react";
import "./Sidebar.css";

function ListItem({ title, href }) {
  return (
    <li>
      <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <a className="nav-link sidebar-title" href={href}>
          {title}
        </a>
      </h5>
    </li>
  );
}

function Sidebar() {
  //  sidebar needs the specific addonitem that it's clicking's toggle variable, and if toggle is true
  //     if toggle is false, setToggle(true)

  return (
    <nav className="navbar-expand-lg d-none d-md-block sidebar">
      <div className="sidebar-sticky sidebar-content">
        <ul className="nav flex-column mb-2">
          <ListItem title="Map" href="map" />
          <ListItem title="Chat" href="chat" />
          <ListItem title="Raidframes" href="raidframes" />
          <ListItem title="Unitframes" href="unitframes" />
          <ListItem title="Actionbar" href="actionbar" />
          <ListItem title="Questing" href="questing" />
          <ListItem title="Textures/Icons" href="textures" />
          <ListItem title="Minimap" href="minimap" />
          <ListItem title="Buffs/Debuffs" href="buffs" />
          <ListItem title="Swingtimer" href="swingtimer" />
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
