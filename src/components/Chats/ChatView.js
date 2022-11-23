import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedImage } from "../../features/appSlice";
import "./ChatView.css";

const ChatView = () => {
  const selectedImage = useSelector(selectSelectedImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage]);

  const exit = () => {
    navigate("../chats", { replace: true });
  };

  return (
    <div className="chatview">
      <img src={selectedImage} onClick={exit} alt="" />
    </div>
  );
};

export default ChatView;
