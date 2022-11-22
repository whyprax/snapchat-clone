import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    setImgSrc(() => webcamRef.current.getScreenshot());
  }, [webcamRef, setImgSrc]);

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
      <RadioButtonUncheckedIcon onClick={capture} className="webcam" />
      {imgSrc && <img src={imgSrc} alt="pic" />}
    </div>
  );
};

export default WebcamCapture;
