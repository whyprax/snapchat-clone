import { StopRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactTimeago from "react-timeago";
import { selectImage } from "../../features/appSlice";
import "./Chats.css";
import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

const Chat = ({ id, username, timestamp, imageUrl, read, profilePic }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      updateDoc(doc(db, "posts", id), {
        read: true,
      });
      navigate("./chatview");
    }
  };

  return (
    <div onClick={open} className="chat">
      <div className="chat__left">
        <Avatar className="chat__avatar" src={imageUrl} />
        <div className="chat__info">
          <h4>{username}</h4>
          <p>
            Tap to view -
            <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
          </p>
        </div>
      </div>

      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
};

export default Chat;
