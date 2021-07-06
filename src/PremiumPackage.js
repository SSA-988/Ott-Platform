import React from 'react';
import './PremiumPackage.css'
import { useHistory } from "react-router";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function PremiumPackage({ isOpen }) {
    const [user] = useAuthState(auth);
    // console.log("user: " + user);
    const history = useHistory();
     const signIn = () => {
       history.push("/Checkout");
     };
     if(!isOpen)
        return null;
     
  return (
    <div className="premiumPackage">
        <form>
          <h2>hey {user.displayName},</h2>
          <h3>
            Thank you for <br></br> choosing PREMIUM !!
          </h3>
          <button type="Submit" onClick={signIn}>
            CONTINUE
          </button>
        </form>
    </div>
  );
}

export default PremiumPackage
