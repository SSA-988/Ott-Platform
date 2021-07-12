import React from "react";
import "./MainScreen.css";
import Row from "./Row";
import requests from "./Requests";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function MainScreen() {
  const [user] = useAuthState(auth);
  return (
    <div className="mainscreen">
      <Row
        title="Action and adventure movies"
        getUrl={requests.fetchTopRated}
      />
      <Row title={`Top Picks For ${user.displayName}`} YOU getUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" getUrl={requests.fetchComedyMovies} />
      <Row title=" SUSPENSFUL HORROR MOVIES" getUrl={requests.fetchHorrorMovies} />
      <Row title="Dark Romance" getUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTRIES" getUrl={requests.fetchDocumentaries} />
      <Row title="ANIMATED MOVIES" getUrl={requests.fetchAnimation} />
      <Row title="SCI-FI MOVIES" getUrl={requests.fetchScifi} />
      <Row title="CRIME & THRILLERS" getUrl={requests.fetchMystery} />
      <Row title="TRENDING  MOVIES" getUrl={requests.fetchTrending} />
      <Row title="UPCOMING  MOVIES" getUrl={requests.fetchUpcomingMovies} />
      <Row title="NOW PLAYING  MOVIES" getUrl={requests.fetchNowPlaying} />
      <Row title="BINGEWORTHY TV SHOWS" getUrl={requests.fetchTv} />
      <Row title="TOP RATED TV SHOWS" getUrl={requests.fetchTopRatedTv} />
    </div>
  );
}

export default MainScreen;
