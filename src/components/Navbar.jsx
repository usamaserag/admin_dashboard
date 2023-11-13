import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import ThemeButton from "./ThemeButton";
import UserImage from "./UserImage";

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <nav className="flex justify-end items-center h-16 px-4 sticky top-0 right-0 left-0">
      <div className="flex items-center gap-5">
        <SearchIcon />
        <Badge badgeContent={0} size="small" color="info">
          <NotificationsIcon />
        </Badge>
        <SettingsIcon />
        <UserImage userName="Usama" />
        <ThemeButton mood={isDark} handleMood={() => setIsDark(!isDark)} />
      </div>
    </nav>
  );
};

export default Navbar;
