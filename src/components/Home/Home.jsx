import React, { useEffect } from "react";
import "./Home.css";
import AddonItem from "../AddonItem/AddonItem";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const windowSize = useWindowSize();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sinch's Addons";
  });

  return (
    <div
      className={`homeCard ${
        windowSize.width > 600 && windowSize.width < 1100
          ? "med"
          : windowSize.width <= 600
          ? "narrow"
          : "wide"
      }`}
    >
      <HomeCard></HomeCard>
    </div>
  );
}

function HomeCard() {
  return (
    <div id="map" className="pad">
      <ul>
        <AddonItem
          addonTitle="Map"
          imgSrc="/images/map.jpg"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="1"
          id="map"
          alt="map-img"
        />
        <AddonItem
          addonTitle="Chat"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="2"
          id="raidframes"
          alt="chat-img"
        />
        <AddonItem
          addonTitle="Raidframes"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="3"
          id="unitframes"
          alt="raidframes-img"
        />
        <AddonItem
          addonTitle="Unitframes"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="4"
          id="actionbar"
          alt="unitframes-img"
        />
        <AddonItem
          addonTitle="Actionbar"
          imgSrc="/images/actionbar.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="5"
          id="questing"
          alt="actionbar-img"
        />
        <AddonItem
          addonTitle="Questing"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="6"
          id="textures"
          alt="questing-img"
        />
        <AddonItem
          addonTitle="Textures"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="7"
          id="minimap"
          alt="textures-img"
        />
        <AddonItem
          addonTitle="Minimap"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="8"
          id="buffs"
          alt="minimap-img"
        />
        <AddonItem
          addonTitle="Buffs"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="9"
          id="buffs"
          alt="buffs-img"
        />
        <AddonItem
          addonTitle="Swingtimer"
          imgSrc="/images/placeholder.png"
          b1="abc"
          b2="another bulletpoint with addon info"
          b3="another bulletpoint with addon info 2"
          key="10"
          id="swingtimer"
          alt="swingtimer-img"
          last={true}
        />
      </ul>
      <img
        className="background-img"
        src="/images/wes.jpg"
        alt="backround-img"
      ></img>
    </div>
  );
}

export default Home;
