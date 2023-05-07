import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import SideBar from "./components/SideBar";

const users = [
  {
    name: "Sohan Agashimani",
    image: "https://picsum.photos/id/1/200",
    muted: false,
  },
  {
    name: "Darshan Agashimani",
    image: "https://picsum.photos/id/8/200",
    muted: true,
  },
  {
    name: "Neil Karadi",
    image: "https://picsum.photos/id/12/200",
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
      <SideBar
        {...{ handleToggleMute, toggleSidebar, userList, showSidebar }}
      />
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
