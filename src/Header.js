import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../src/Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      {/* Left Header */}
      <div className="header__left">
        <img
          src="https://seeklogo.com/images/L/linkedin-icon-logo-FBADE03110-seeklogo.com.png"
          alt=""
        />
      </div>

      {/* Search Header */}
      <div className="header__search">
        {/* SearchIcon */}
        <SearchIcon />
        <input type="text" />
      </div>

      {/* Right Header */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.dlpng.com/static/png/6860651_preview.png"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
