import React, { useEffect, useState } from "react";
import "./MusicCard.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useDispatch } from "react-redux";
import { increaseTimesPlayed, setCurrentPlaying } from "../redux/actions";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function MusicCard(props) {
  const { name, img, author_name } = props.music;

  const [isHovered, setHovered] = useState(false);

  function handleResponse() {
    setHovered(!isHovered);
  }

  const dispatch = useDispatch();

  function handlePlay() {
    dispatch(setCurrentPlaying(props.music));
    dispatch(increaseTimesPlayed(props.music.id));
  }

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={"music-card songRow"}
    onMouseOver={handleResponse}
    onClick={handlePlay}
    >
      {!loaded ? (
        <div className={"Skeleton-top"}>
          <Skeleton variant="rect" width={210} height={210} />
          <Box pt={0.5}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </div>
      ) : (
        <>
          <div
            // onClick={handlePlay}
            className={"music-card-cover "}
            // onMouseOver={handleResponse}
          >
            <img className="songRow__album" src={require("./assets/img/" + img)} alt={name} />
            <div className="play-circle">
              <PlayCircleFilledWhiteIcon />
            </div>
          </div>
          <div className="songRow__info">
            <h1>{name}</h1>
            <p>
              {author_name}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default MusicCard;
