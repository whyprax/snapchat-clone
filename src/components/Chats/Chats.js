import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Chat from "./Chat";

const Chats = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
    );
  }, []);

  return (
    <div className="chats">
      <div className="chats__header">
        <div className="chats__left">
          <Avatar className="chats__avatar" />
          <div className="chats__input">
            <SearchIcon />
            <input type="text" placeholder="Friends" />
          </div>
        </div>
        <div className="chats__right">
          <ChatBubbleIcon />
        </div>
      </div>

      <div className="chats__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Chats;
