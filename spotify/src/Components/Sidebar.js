import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";


function Sidebar() {

  return (
    <div className="sidebar">
      <div>
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt=""
      />
      <SidebarOption href={"/"} option="For You" />
      <SidebarOption href={"/top_tracks"} option="Top Tracks" />
      <SidebarOption href={"/favourites"} option="Favourites" />
      <SidebarOption href={"/recently_played"} option="Recently Played" />
      </div>
      <div className="header__bottom">
        {/* <Avatar alt={user?.display_name} src={user?.images[0]?.url} /> */}
        {/* <h4>{user?.display_name}</h4> */}
      </div>
    </div>
  );
}

export default Sidebar;



// import "../assets/scss/SideBar.scss";
// import SideBarOptions from "./SideBarOptions";

// function SideBar() {
//     return (
//         <aside className={"aside-bar"}>
//             <div className="aside-bar-container">
//                 <SideBarOptions className={"lib-sub"} href={"/"} title={"For You"} />
//                 <SideBarOptions className={"lib-sub"} href={"/top_tracks"}  title={"Top Tracks"}/>
//                 <SideBarOptions className={"lib-sub"} href={"/favourites"}  title={"Favourites"}/>
//                 <SideBarOptions className={"lib-sub"} href={"/recently_played"} title={"Recently Played"} />
//             </div>
//             <div className="aside-bar-container playlist">

//              </div>
//         </aside>
//     );
// }


// export default SideBar;
