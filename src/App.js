import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import "./App.css";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/Chats/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <img
            onClick={() => auth.signOut()}
            className="app__logo"
            src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
            alt=""
          />
          <Routes>
            <Route path="/" exact element={<WebcamCapture />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chats/chatview" element={<ChatView />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
