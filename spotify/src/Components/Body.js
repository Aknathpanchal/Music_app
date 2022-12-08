import React from "react";
import "./Body.css";
import MusicCard from "./MusicCard";
import { useSelector } from "react-redux";

function Body() {
  const { playlists } = useSelector((state) => state.musicReducer);

  // const playPlaylist = (id) => {
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:3o2QgTCTzBXxc1qOiFTq7C`,
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  // const playSong = (id) => {
  // console.log(id, "playing");
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((res) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  return (
    <div className="body body__songs">
      {playlists.map((item) => (
        <MusicCard key={item.id} music={item} />
      ))}
    </div>
  );
}

export default Body;

// import React from "react"
// import '../assets/scss/MusicCardContainer.scss';
// import MusicCard from "./MusicCard";

// import Container from "./Container";

// function MusicCardContainer() {
//     const {playlists} = useSelector(state => state.musicReducer);
//     return (
//         <Container>
//             <div className={"music-card-container"}>
//                 {
//                     playlists.map(item => (
//                         <MusicCard key={item.id} music={item}/>
//                     ))
//                 }
//             </div>
//         </Container>
//     );
// }

// export default MusicCardContainer;
