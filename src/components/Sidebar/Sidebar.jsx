import React from "react";
import "./Sidebar.css"

function Sidebar() {
  return (
    <nav className="d-none d-md-block sidebar">
        <div className="sidebar-sticky sidebar-content">
            <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <a className="nav-link sidebar-title" href="#map">Map</a>
            </h5>
          <ul className="nav flex-column mb-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#chat">Chat</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#raidframes">Raidframes</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#unitframes">Unitframes</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#actionbar">Actionbar</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#questing">Questing</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#textures">Textures/Icons</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#minimap">Minimap</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#buffs">Buffs/Debuffs</a>
                </h5>
              </li>
              <li>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <a className="nav-link sidebar-title" href="#swingtimer">Swingtimer</a>
                </h5>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
  );
}

export default Sidebar;