import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
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
      <div className="chatview__timer">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit();
            }
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ChatView;
