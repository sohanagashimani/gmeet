import React from "react";
import { FaTimes } from "react-icons/fa";
import UserListItem from "./UserListItem";

const SideBar = ({
  showSidebar,
  userList,
  handleToggleMute,
  toggleSidebar,
}) => {
  return (
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
            <UserListItem {...{ user, index, handleToggleMute }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
