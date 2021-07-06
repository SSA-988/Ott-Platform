import React from "react";
import "./MainScreen.css";
import Row from "./Row";
import requests from "./Requests";

function MainScreen() {
  return (
    <div className="mainscreen">
      <Row title="TOP RATED MOVIES" getUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" getUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" getUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" getUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" getUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTRIES" getUrl={requests.fetchDocumentaries} />
      <Row title="ANIMATED MOVIES" getUrl={requests.fetchAnimation} />
      <Row title="SCI-FI MOVIES" getUrl={requests.fetchScifi} />
      <Row title="MYSTERY MOVIES" getUrl={requests.fetchMystery} />
      <Row title="TRENDING  MOVIES" getUrl={requests.fetchTrending} />
      <Row title="UPCOMING  MOVIES" getUrl={requests.fetchUpcomingMovies} />
      <Row title="NOW PLAYING  MOVIES" getUrl={requests.fetchNowPlaying} />
      <Row title="TV SHOWS" getUrl={requests.fetchTv} />
      <Row title="TOP RATED TV SHOWS" getUrl={requests.fetchTopRatedTv} />
    </div>
  );
}

export default MainScreen;
