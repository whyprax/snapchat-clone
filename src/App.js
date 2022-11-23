import React from "react";
import { Route, Routes } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import "./App.css";
import Chats from "./components/Chats/Chats";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<WebcamCapture />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
};

export default App;
