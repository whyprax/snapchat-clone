import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "../../features/cameraSlice";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
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
      <RadioButtonUncheckedIcon onClick={capture} className="webcam" />
    </div>
  );
};

export default WebcamCapture;
