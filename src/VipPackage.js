import React from 'react';
import './VipPackage.css'
import { useHistory } from "react-router";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function VipPackage({open}) {
    const [user] = useAuthState(auth);
    const history = useHistory();
    const signIn = () =>{
        history.push("/Checkout");
    }
     if (!open) {
        return null;
     }
    return (
      <div className="vipPackage">
        <form>
          <h2>hey {user.displayName},</h2>
          <h3>thank you for <br></br> choosing VIP !!</h3>
          <button type="Submit" onClick={signIn}>
            CONTINUE
          </button>
        </form>
      </div>
    );
}

export default VipPackage
