import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import Login from "./Login";
import MainScreen from "./MainScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Subscription from "./Subscription";
import Checkout from "./Checkout";
import Spinner from "react-spinkit";
import PrivacyPolicy from "./PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import React, { useEffect } from "react";
import {auth }from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Boxes from "./Boxes";

function App() {

  const [user,loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="app_loading">
        <div className="app_content">
          <img
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
          <Spinner color="#0083B0" fadeIn="none" />
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/PrivacyPolicy">
              <PrivacyPolicy />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/subscription">
              <Subscription />
            </Route>
            <Route path="/">
              <div className="app_body">
                <Header />
                <Banner />
                <Boxes/>
                <MainScreen />)
              </div>
            </Route>
            {/* <Route path="/subscription">
              <Subscription />
            </Route> */}
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
