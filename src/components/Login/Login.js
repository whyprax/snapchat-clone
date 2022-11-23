import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../../firebase";
import { login } from "../../features/appSlice";

const Login = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://cutewallpaper.org/24/snapchat-png-logo/101-snapchat-logo-png-transparent-background-2020-free-download.png"
        alt="snapchat"
      />
      <button onClick={clickHandler}>Sign In</button>
    </div>
  );
};

export default Login;
