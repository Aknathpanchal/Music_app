import React, { useContext, useEffect, useRef, useState } from "react";
import "./FooterPlayer.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import ControlsToggleButton from "./ControlsToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaying } from "../redux/actions";

function FooterMusicPlayer({ music }) {
  const [{ id, name, author_name, img, musicName }, setCurrTrack] =
    useState(music);
  const [isRepeatClicked, setRepeatClick] = useState(false);
  const [isPrevClicked, setPrevClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isPlaying, setPlayPauseClicked] = useState(false);
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [volume, setVolume] = useState(50);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);

  const audioElement = useRef();
  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.musicReducer);
  const pointer = { cursor: "pointer", color: "white" };

  const handleToggle = (type, val) => {
    switch (type) {
      case "repeat":
        setRepeatClick(val);
        break;
      case "prev":
        setPrevClicked(val);
        break;
      case "play-pause":
        setPlayPauseClicked(val);
        break;
      case "next":
        setNextClicked(val);
        break;
      case "volume":
        setVolumeClicked(val);
        break;
      default:
        break;
    }
  };
  const handleSeekChange = (event, newValue) => {
    audioElement.current.currentTime = (newValue * duration) / 100;
    setSeekTime(newValue);
  };
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  useEffect(() => {
    isPlaying
      ? audioElement.current
          .play()
          .then(() => {})
          .catch((e) => {
            audioElement.current.pause();
            audioElement.current.currentTime = 0;
          })
      : audioElement.current.pause();
    audioElement.current.loop = isRepeatClicked;
    audioElement.current.volume = volume / 100;
    audioElement.current.muted = isVolumeClicked;
    audioElement.current.onloadeddata = () => {
      if (audioElement.current != null)
        setDuration(audioElement.current.duration);
    };
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    });
  });

  useEffect(() => {
    setCurrTrack(music);
  }, [music]);

  useEffect(() => {
    setSeekTime(currTime / (duration / 100));
  }, [currTime, duration]);

  useEffect(() => {
    audioElement.current.onended = () => {
      setNextClicked(true);
    };
  });

  useEffect(() => {
    if (isNextClicked) {
      let currTrackId = (id + 1) % playlists.length;
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setNextClicked(false);
    }
    if (isPrevClicked) {
      let currTrackId = (id - 1) % playlists.length;
      if (id - 1 < 0) {
        currTrackId = playlists.length - 1;
      }
      dispatch(setCurrentPlaying(playlists[currTrackId]));
      setPrevClicked(false);
    }
  }, [dispatch, id, isNextClicked, isPrevClicked, playlists]);

  return (
    <div className={"footer-player"}>
      <div className="curr-music-details">
        <h1 className="s_name">{name}</h1>
        <p className="a_name">{author_name}</p>
      </div>
      <br />
      <center className="img_container">
        <img
          src={require("./assets/img/" + img)}
          alt={name}
          style={{ width: "100%" }}
        />
      </center>

      <div className="side_playback">
        {!isNaN(seekTime) && (
          <Slider
            style={{ color: "white" }}
            className={"playback-completed"}
            value={seekTime}
            onChange={handleSeekChange}
          />
        )}
      </div>

      <div className="playback-controls">
        <ControlsToggleButton
          style={pointer}
          type={"repeat"}
          defaultIcon={<RepeatIcon fontSize={"large"} />}
          changeIcon={<RepeatOneIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsToggleButton
          style={pointer}
          type={"prev"}
          defaultIcon={<SkipPreviousIcon fontSize={"large"} />}
          changeIcon={<SkipPreviousIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <audio
          ref={audioElement}
          src={require("./assets/music/" + musicName)}
          preload={"metadata"}
        />

        <ControlsToggleButton
          style={pointer}
          type={"play-pause"}
          defaultIcon={<PlayArrowIcon fontSize={"large"} />}
          changeIcon={<PauseIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsToggleButton
          style={pointer}
          type={"next"}
          defaultIcon={<SkipNextIcon fontSize={"large"} />}
          changeIcon={<SkipNextIcon fontSize={"large"} />}
          onClicked={handleToggle}
        />

        <ControlsToggleButton
          style={pointer}
          type={"volume"}
          defaultIcon={<VolumeUpIcon />}
          changeIcon={<VolumeOffIcon />}
          onClicked={handleToggle}
        />
      </div>
    </div>
  );
}

export default FooterMusicPlayer;
