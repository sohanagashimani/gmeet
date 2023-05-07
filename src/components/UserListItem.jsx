import React from "react";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";

const UserListItem = ({ user, handleToggleMute, index }) => {
  return (
    <div className="user">
      <div className="user-details">
        <p>{user.name}</p>
        <button onClick={() => handleToggleMute(index)} className="mute-icon">
          {user.muted ? <BiMicrophoneOff /> : <BiMicrophone />}
        </button>
      </div>
    </div>
  );
};

export default UserListItem;
