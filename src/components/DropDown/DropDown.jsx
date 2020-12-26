import React from "react";

// TO DO LIST:

// whenever the user click on any part of the site, the dropdown should close.

function DropDown({}) {
  return (
    <div className="dropdown">
      <button
        className="dropbtn"
        onClick={() => {
          document.getElementById("myDropdown").classList.toggle("show");
        }}
      >
        <i
          style={{ color: "#fff" }}
          className="fas fa-bars fa-2x ml-4 dropbtn"
        ></i>
      </button>

      <div id="myDropdown" className="dropdown-content">
        <DropDownListItem title="Map" href="#chat" />
        <DropDownListItem title="Chat" href="#raidframes" />
        <DropDownListItem title="Raidframes" href="#unitframes" />
        <DropDownListItem title="Unitframes" href="#actionbar" />
        <DropDownListItem title="Actionbar" href="#questing" />
        <DropDownListItem title="Questing" href="#textures" />
        <DropDownListItem title="Textures/Icons" href="#minimap" />
        <DropDownListItem title="Minimap" href="#buffs" />
        <DropDownListItem title="Buffs/Debuffs" href="#swingtimer" />
        <DropDownListItem title="Swingtimer" href="#footer" />
      </div>
    </div>
  );
}

function DropDownListItem({ title, href }) {
  function smoothScroll() {
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
  return <a onClick={smoothScroll}>{title}</a>;
}

export default DropDown;
