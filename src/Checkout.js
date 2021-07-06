import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import "./Checkout.css";

function Checkout() {
  const history = useHistory();
  return (
    <div className="checkout">
      <div className="checkout_info">
        <h2>
          Thank You for choosing Your desired Hotstar plan! <br />
          we would love to provide the best shows you like.
        </h2>
        <p>
          By joining Hotstar you've agreed to our{" "}
          <span onClick={() => history.push("/PrivacyPolicy")}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span onClick={() => history.push("/PrivacyPolicy")}>
            Privacy Statement
          </span>
        </p>
        <h3>
          Choose from popular films and full seasons of hit TV programmes <br />
          Enjoy a wide variety of choices, including Action & Adventure, <br />
          Comedy, Kids & Family, Documentaries, and more. <br />
        </h3>
        <div className="checkout_button">
          <Button onClick={() => history.push("/")} variant="outlined">
            START WATCHING
          </Button>
        </div>
        <div className="checkout_stats">
          <p>
            © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </p>
        </div>
        <div className="checkoutimages">
          <img
            className="checkout_playstore"
            src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"
            alt=""
          />
          <img
            className="checkout_appstore"
            src="https://images.squarespace-cdn.com/content/v1/5cb86c018dfc8ca29e4e4b2b/1585767173618-DQWYTZI9LXP26S4FDUWO/ke17ZwdGBToddI8pDm48kGwI2q9ay8oxpMKuvrskYZlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxM6CcmncPhVP9DiOF3uuho_BRHe4QOKd0MUCigtS_gvOZdmv0Ma8epo3jNOOsisKY/app-store-badge.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
