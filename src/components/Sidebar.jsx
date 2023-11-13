import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import GridViewIcon from "@mui/icons-material/GridView";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const sidebarData = [
  { text: "Home page", icon: <HomeIcon />, url: "/" },
  { text: "Profile", icon: <PersonIcon />, url: "/profile" },
  { text: "Users", icon: <PeopleAltIcon />, url: "/users" },
  {
    text: "Products",
    icon: <ProductionQuantityLimitsIcon />,
    url: "/products",
  },
  { text: "Orders", icon: <ListAltIcon />, url: "/orders" },
  { text: "Posts", icon: <PostAddIcon />, url: "/posts" },
  { text: "Elements", icon: <GridViewIcon />, url: "/elements" },
  { text: "Notes", icon: <EditNoteIcon />, url: "/notes" },
  { text: "Forms", icon: <FormatAlignCenterIcon />, url: "/add_user" },
  { text: "Calender", icon: <CalendarMonthIcon />, url: "/calender" },
  { text: "Settings", icon: <SettingsIcon />, url: "/settings" },
  { text: "Charts", icon: <BarChartIcon />, url: "/charts" },
  { text: "Logs", icon: <AssignmentIcon />, url: "/logs" },
];

const Sidebar = () => {
  const [hideText, setHideText] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
    if (windowWidth <= 768) {
      setHideText(true);
    }
  };

  const handleSidebarShowText = () => {
    if (windowWidth <= 768) {
      return
    }
    setHideText(!hideText);
  };

  useEffect(() => {
    updateWindowWidth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);
  return (
    <aside className="min-w-fit px-5 dark:bg-base-200 bg-gray-300 h-screen sticky top-0 bottom-0 left-0">
      <div className="flex items-center justify-between h-16">
        <span className="p-2">
          <DashboardIcon />
        </span>
        <button
          className="rounded-full w-6 h-6 flex justify-center items-center bg-gray-300 dark:bg-base-200 absolute right-[-10px]"
          onClick={handleSidebarShowText}
        >
          {hideText ? (
            <ChevronRightIcon fontSize="small" />
          ) : (
            <ChevronLeftIcon fontSize="small" />
          )}
        </button>
      </div>
      <ul className="text-base-content">
        {sidebarData.map((sidebarItem, index) => (
          <li
            className="font-normal p-2 rounded-md hover:bg-base-300"
            key={index}
          >
            <Link to={sidebarItem.url} className="flex items-center gap-2 text-sm">
              <span>{sidebarItem.icon}</span>
              <span className={hideText ? "hidden" : "hidden md:block"}>
                {sidebarItem.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
