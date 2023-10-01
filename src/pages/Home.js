import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & Username is required");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };
  const handleInputEnter = (e) => {
    if (e.code == 'Enter'){
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/logo192.png" alt="logo192" />
        <h4 className="mainLabel">Paste invitation roomId</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USER NAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you dont have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          {" "}
          Built with inovation by &nbsp;
          <a href="https://github.com/Nischal00">Nischal Bhandari</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
