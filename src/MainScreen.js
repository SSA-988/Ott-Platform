import React from "react";
import "./MainScreen.css";
import Row from "./Row";
import requests from "./Requests";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function MainScreen() {
  const [user] = useAuthState(auth);
  return (
    <div className="mainscreen">
      <Row
        title="Action and adventure movies"
        getUrl={requests.fetchTopRated}
      />
      <Row
        title={`Top Picks For ${user.displayName}`}
        YOU
        getUrl={requests.fetchActionMovies}
      />
      <Row
        title="TELUGU ACTION & DRAMA"
        getUrl={requests.fetchActionTeluguMovies}
      />
      <Row title="KANNADA MOVIES" getUrl={requests.fetchKannadaMovies} />
      <Row title="COMEDY MOVIES" getUrl={requests.fetchComedyMovies} />
      <Row
        title=" SUSPENSFUL HORROR MOVIES"
        getUrl={requests.fetchHorrorMovies}
      />
      <Row title="Dark Romance" getUrl={requests.fetchRomanceMovies} />

      <div className="mainscreen_loki">
        <img src="https://images6.alphacoders.com/113/1139109.jpg" alt="" />
        <h2>
          Binge Watch Loki Season 1{" "}
          <span>
            <ChevronRightIcon className="mainscreen_icon" fontSize="large" />
          </span>
        </h2>
        <div className="mainscreen_fadebottom" />
        <div className="mainscreen_scroll">
          <div className="mainscreen_seasons">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/1689/1011689-h-539ca9fd6bce"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S1 E1</h2>
          </div>

          <div className="mainscreen_seasons2">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/8386/1018386-h-63a71f18488c"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S2 E2</h2>
          </div>

          <div className="mainscreen_seasons3">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4474/1024474-h-956e10916739"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S3 E3</h2>
          </div>

          <div className="mainscreen_seasons4">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9299/1029299-h-7c22562567b5"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S4 E4</h2>
          </div>

          <div className="mainscreen_seasons5">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2220/1032220-h-9bc60e5781b0"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S5 E5</h2>
          </div>

          <div className="mainscreen_seasons6">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4349/1034349-h-a917ed22e110"
              alt=""
            />
            <PlayArrowIcon className="mainscreen_playIcon" />
            <h2>S6 E6</h2>
          </div>
        </div>
      </div>
      <Row title="DOCUMENTRIES" getUrl={requests.fetchDocumentaries} />
      <Row title="ANIMATED MOVIES" getUrl={requests.fetchAnimation} />
      <Row title="SCI-FI MOVIES" getUrl={requests.fetchScifi} />
      <Row title="CRIME & THRILLERS" getUrl={requests.fetchMystery} />
      <Row title="TRENDING  MOVIES" getUrl={requests.fetchTrending} />
      <Row title="UPCOMING  MOVIES" getUrl={requests.fetchUpcomingMovies} />
      <Row title="NOW PLAYING  MOVIES" getUrl={requests.fetchNowPlaying} />
      <Row title="BINGEWORTHY TV SHOWS" getUrl={requests.fetchTv} />
      <Row title="TOP RATED TV SHOWS" getUrl={requests.fetchTopRatedTv} />
      <Row title="TELUGU MOVIES" getUrl={requests.fetchTeluguMovies} />
      <Row title="HINDI MOVIES" getUrl={requests.fetchHindiMovies} />
      <Row title="HINDI LATEST MOVIES" getUrl={requests.fetchHindiLatest} />
      <Row title="KANNADA 2018" getUrl={requests.fetchKannadaAction} />
      <Row title="TAMIL BLOCKBUSTERS FOR YOU" getUrl={requests.fetchTamilMovies} />
      <Row title="MALAYALAM MOVIES" getUrl={requests.fetchMalayalamMovies} />
      <Row title="KANNADA BLOCKBUSTERS" getUrl={requests.fetchKannadaBlock} />
    </div>
  );
}

export default MainScreen;
//https://images6.alphacoders.com/113/1139109.jpg