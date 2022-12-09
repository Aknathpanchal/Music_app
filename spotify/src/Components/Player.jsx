import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FooterMusicPlayer from "./FooterMusicPlayer";
import FooterSelectMusic from "./FooterSelectMusic";
// import MusicCardContainer from "./MusicCardContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Body from "./Body";
import Logo from "./Logo";
import Pop from "./Pop";

function getCurrPage(pathName) {
  switch (pathName) {
    case "/":
      return <Body />;
    default:
      if (pathName.startsWith("/home")) {
        return <Body />;
      }
      return null;
  }
}

function Player() {
  const [currMusic, setCurrMusic] = useState(null);
  const { playing } = useSelector((state) => state.musicReducer);

  useEffect(() => {
    setCurrMusic(playing);
  }, [playing]);

  return (
    <div className={"home-container"}>
      <div>
        <div>
           <Logo/>
           <Pop/>
        </div>
        <Sidebar/>
      </div>
      <div>
        <Header />
        <Body />
      </div>
      <div>
      <Pop/>
        {currMusic ? (
          <FooterMusicPlayer music={currMusic} />
        ) : (
          <FooterSelectMusic />
        )}
      </div>
    </div>
  );
}

export default Player;
