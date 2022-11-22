import React, { useEffect } from "react";
import "./Preview.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  resetCameraImage,
  selectCameraImage,
} from "../../features/cameraSlice";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import {
  AttachFile,
  Create,
  Crop,
  MusicNote,
  Note,
  Send,
  Timer,
} from "@mui/icons-material";

const Preview = () => {
  const cameraImg = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImg) {
      navigate("/");
    }
  }, [cameraImg, navigate]);

  const closePreview = () => {
    dispatch(resetCameraImage());
    navigate("/");
  };

  return (
    <div className="preview">
      <CloseIcon className="preview__close" onClick={closePreview} />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImg} alt="" />
      <div className="preview__footer">
        <h3>Send Now</h3>
        <Send fontSize="small" className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
