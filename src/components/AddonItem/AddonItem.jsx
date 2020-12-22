import React, { useState } from "react";
import "./AddonItem.css";
import SmoothCollapse from "react-smooth-collapse";

function AddonItem({ addonTitle, imgSrc, alt, b1, b2, b3, id, last }) {
  const [toggle, setToggle] = useState(true);
  const buttons = [];
  const hr = id === "map" ? "chat" : id;

  if (toggle) {
    buttons.push(<i className="fas fa-minus"></i>);
  } else {
    buttons.push(<i className="fas fa-plus"></i>);
  }

  const appearOptions = {};

  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className="collapsible"
      >
        {buttons}
      </button>
      {toggle ? (
        <SmoothCollapse expanded="true" heightTransition="0.7s ease">
          <li className="content">
            <h2 className="addon-title">{addonTitle}</h2>
            <img className="addon-img" src={imgSrc} alt={alt} />
            <p className="addon-body onHover">• {b1}</p>
            <p className="addon-body">• {b2}</p>
            <p className="addon-body">• {b3}</p>
          </li>
          {!last && <hr id={hr} />}
        </SmoothCollapse>
      ) : (
        <SmoothCollapse>
          <li className="content">
            <h2 className="addon-title">{addonTitle}</h2>
            <img className="addon-img" src={imgSrc} alt={alt} />
            <p className="addon-body onHover">• {b1}</p>
            <p className="addon-body">• {b2}</p>
            <p className="addon-body">• {b3}</p>
          </li>
          <hr id={hr} />
        </SmoothCollapse>
      )}
    </div>
  );
}

export default AddonItem;