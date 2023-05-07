import React from "react";
import "./Card.css";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";

function Card({ user, onToggleMute }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{user.name}</div>
        <button onClick={onToggleMute}>
          {user.muted ? <BiMicrophoneOff /> : <BiMicrophone />}
        </button>
      </div>
      <div className="card-body">
        <img src={user.image} alt={user.name} />
      </div>
    </div>
  );
}

export default Card;
