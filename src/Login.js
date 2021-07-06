import { Button } from "@material-ui/core";
import React from "react";
import { auth, facebookprovider, provider } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import {  db } from "./firebase";
import { useState, useEffect } from "react";

function Login() {
  const [user,setUser] = useState([])
   useEffect(() => {
     db.collection("posts")
       .orderBy("timestamp", "desc")
       .onSnapshot((snapshot) =>
         setUser(
           snapshot.docs.map((doc) => ({
             id: doc.id,
             data: doc.data(),
           }))
         )
       );
   }, []);
    const dispatch = useDispatch();
 
    const login = () =>{
        auth
          .signInWithPopup(provider)
          .then((result) => {
            dispatch(
              login({
                username: result.user.displayName,
                profilePic: result.user.photoURl,
                id: result.user.uid,
              })
            );
          })
          .catch((error) => alert(error.message));
    }
    const signIn = (e) => {
      e.preventDefault();
      auth.signInWithPopup(facebookprovider).catch((error) =>alert(error.message));
    }
 
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt=""
        />
        <h1>Welcome to Hotstar</h1>
        <div className="login_buttons">
          <Button className="login_button" onClick={login}>Sign In with Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;


//  <div className="login_content">
//         <img
//           src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
//           alt=""
//         />
//         <h1>Login to Disney+ Hotstar</h1>
//       </div>
//       <div className="login_button">
//         <Button variant="outlined" onClick={login}>
//           Sign In with Google
//         </Button>
//       </div>