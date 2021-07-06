import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { auth, provider } from "./firebase";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";


function Header() {

  const [user] = useAuthState(auth);
  console.log(user);
  const history = useHistory();

  const signout = () => {
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header_content">
        <div className="header_left">
          <MenuIcon />
          <img
            onClick={() => history.push("/")}
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt=""
          />
          {/* <h2 className="header_leftTvOptions">Tv</h2> */}
          {/* <div className="header_leftDropdowncontent">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div> */}
          <div class="header_leftdropdown">
            <h2 class="header_leftHeader">Tv</h2>
            <div class="dropdown-content">
              <a href="#">Hotstar Specials</a>
              <a href="#">Friends</a>
              <a href="#">Star Plus</a>
              <a href="#">HBO</a>
              <a href="#">more...</a>
            </div>
          </div>

          <div class="header_leftdropdown">
            <h2 class="header_leftHeader">Movies</h2>
            <div class="dropdown-content">
              <a href="#">Kannada</a>
              <a href="#">Telugu</a>
              <a href="#">English</a>
              <a href="#">Tamil</a>
              <a href="#">Bengali</a>
              <a href="#">Marathi</a>
              <a href="#">Malayalam</a>
            </div>
          </div>

          <div class="header_leftdropdown">
            <h2 class="header_leftHeader">Sports</h2>
            <div class="dropdown-content">
              <a href="#">Cricket</a>
              <a href="#">Tennis</a>
              <a href="#">Football</a>
              <a href="#">Badminton</a>
              <a href="#">wrestling</a>
              <a href="#">kabbadi</a>
              <a href="#">table tennis</a>
              <a href="#">athletics</a>
            </div>
          </div>

          <h2>News</h2>
          <h2>Premium</h2>
          <h2>Disney+</h2>

          <h3 className="header_kids">KIDS</h3>
        </div>

        <div className="header_right">
          <input
            className="header_input"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <button
            onClick={() => history.push("/subscription")}
            className="header_button"
            type="submit"
          >
            SUBSCRIBE
          </button>
          <div className="header_user">
            <Avatar
              src={user.photoURL}
              className="header_userAvatar"
              onClick={signout}
            />
            <h4>Welcome, {user.displayName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
