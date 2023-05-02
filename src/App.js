import React, { useState } from "react";
import Card from "./Card";
import "./App.css";
import { FaTimes } from "react-icons/fa";
import UserList from "./UserList";

const users = [
  {
    name: "Sohan Agashimani",
    image: "https://picsum.photos/id/237/200",
    muted: false,
  },
  {
    name: "Darshan Agashimani",
    image: "https://picsum.photos/id/14/200",
    muted: true,
  },
  {
    name: "Neil Karadi",
    image: "https://picsum.photos/id/14/200",
    muted: true,
  },

];

function App() {
  const [userList, setUserList] = useState(users);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleMute = (index) => {
    const updatedList = [...userList];
    updatedList[index].muted = !updatedList[index].muted;
    setUserList(updatedList);
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => {
      return !prev;
    });
  };

  return (
    <div className="App">
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-header">
          <h3>User List</h3>
          <button onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul>
          {userList.map((user, index) => (
            <li>
              <UserList {...{ user, index, handleToggleMute }} />
            </li>
          ))}
        </ul>
      </div>
      <div className="main-video-container">
        {userList.map((user, index) => (
          <Card
            key={index}
            user={user}
            onToggleMute={() => handleToggleMute(index)}
          />
        ))}
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {showSidebar ? "Close" : "Open"} User List
      </button>
    </div>
  );
}

export default App;
