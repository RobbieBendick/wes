import React from "react";

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function DropDown() {
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
  return (
    <>
      <a style={{ border: "0.1rem black dotted" }} onClick={smoothScroll}>
        {title}
      </a>
    </>
  );
}
export default DropDown;