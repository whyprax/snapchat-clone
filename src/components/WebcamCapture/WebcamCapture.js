import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "../../features/cameraSlice";
import { useNavigate } from "react-router-dom";
import "./WebcamCapture.css";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const videoConstraints = {
    width: windowSize.width,
    height: windowSize.height,
    facingMode: "user",
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return (
    <div className="webcamCapture">
      <Webcam
        mirrored={true}
        ref={webcamRef}
        audio={false}
        height={videoConstraints.height}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        onClick={capture}
        className="webcamCapture__button"
      />
    </div>
  );
};

export default WebcamCapture;
