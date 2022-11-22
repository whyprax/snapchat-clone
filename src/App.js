import React from "react";
import { Route, Routes } from "react-router-dom";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";

const App = () => {
  return (
    <div className="app">
      <h1>WebCampture</h1>
      <Routes>
        <Route path="/" exact element={<WebcamCapture />} />
      </Routes>

      {/* <WebcamCapture /> */}
    </div>
  );
};

export default App;
