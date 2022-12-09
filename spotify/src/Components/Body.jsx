import React from "react";
import "./Body.css";
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";

function Body() {
  const { playlists } = useSelector((state) => state.musicReducer);

  return (
    <>
    <div className="body body__songs">
      <h2>For you</h2>
      {playlists.map((item) => (
        <MusicCard key={item.id} music={item} />
      ))}
    </div>
    </>
  );
}

export default Body;
