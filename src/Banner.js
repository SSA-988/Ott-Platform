import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import "./Banner.css";
import { useEffect, useState } from "react";
import requests from "./Requests";
import axios from "./axios";
import ShareIcon from "@material-ui/icons/Share";
import CreateIcon from "@material-ui/icons/Create";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchAll[0]);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string) {
    return string?.length > 150 ? string.substr(0, 150) + "..." : string;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title}</h1>
      </div>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">WatchList</button>
      </div>
      <div className="banner_overview">
        <h2 className="banner_overview">{truncate(movie?.overview)}</h2>
      </div>
      <div className="banner_stats">
        <h2 className="banner_releasedate">{movie.release_date}</h2>
        <div className="banner_voteCount">
          <ThumbUpIcon className="banner_icon" />
          {movie.vote_count}
        </div>
      </div>
      <div className="bannerOptionss">
        <div className="banner_options">
          <h2 className="banner_option">Share</h2>
          <div className="banner_dropdown">
            <InstagramIcon className="banner_icons" fontSize="large" />
            <WhatsAppIcon className="banner_icons1" fontSize="large" />
            <FacebookIcon className="banner_icons2" fontSize="large" />
          </div>
          <ShareIcon className="bannerShareIcon" />
        </div>
        <div className="bannerSoptions">
          <h2 className="banner_option_two">Reviews</h2>
          <CreateIcon />
        </div>
      </div>
    </div>
  );
}

export default Banner;
