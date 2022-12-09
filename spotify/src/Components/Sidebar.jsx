import React from "react";
// import Logo from "./Logo";
import Pop from "./Pop";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";


function Sidebar() {

  return (
    <div className="sidebar">
      <div>
     {/* <Logo/> */}
      <SidebarOption href={"/"} option="For You" />
      <SidebarOption href={"/top_tracks"} option="Top Tracks" />
      <SidebarOption href={"/favourites"} option="Favourites" />
      <SidebarOption href={"/recently_played"} option="Recently Played" />
      </div>
      <div className="header__bottom">
        <img src="https://imgs.search.brave.com/-g-tcJiPPwW2vMKOSqwLavQNLtJ-coJP1ayq75NGgXY/rs:fit:476:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5BZGx4cm92/ampqVkxIRWkyTTl0/Q0h3SGFIWSZwaWQ9/QXBp" />
        {/* <h4>{user?.display_name}</h4> */}
       {/* <Pop/> */}
      </div>
    </div>
  );
}

export default Sidebar;



