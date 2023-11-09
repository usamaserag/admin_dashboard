import React from "react";
import userImage from "../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import Avatar from "@mui/material/Avatar";

const UserImage = ({ userName }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar sx={{ width: 34, height: 34 }} alt="User" src={userImage} />
      <span>{userName}</span>
    </div>
  );
};

export default UserImage;
