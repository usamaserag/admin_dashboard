import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ThemeButton from "./ThemeButton"



const Navbar = ({ isDark, setIsDark }) => {
  return (
    <nav className="flex justify-between items-center h-20">
      <span>Navbar</span>
      <div className="flex items-center gap-5">
        <Badge badgeContent={1} size="small" color="info">
          <NotificationsIcon />
        </Badge>

        <ThemeButton mood={isDark} handleMood={() => setIsDark(!isDark)} />
        <SettingsIcon />
      </div>
    </nav>
  );
};

export default Navbar;
