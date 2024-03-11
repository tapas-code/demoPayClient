import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User";

const AddGroupMembers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      var response = await axios("/api/user");
      setUserData(response.data);
      console.log(response.data)
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="back--icon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M4 12L8 8M4 12L8 16"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="header--text">
            <h2>New Group</h2>
          </div>
        </div>

        <div className="searchbar">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="selected--members"></div>

        <div className="all--membersList">
            <div className="wrapper">
                {userData.length !== 0? userData.map(u => (<User userData={u}/>)): <h2>Loading..</h2>}
            </div>
        </div>
      </div>
    </>
  );
};

export default AddGroupMembers;
