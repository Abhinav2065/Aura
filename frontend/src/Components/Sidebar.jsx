import React from "react";
import aura from '/aura.png'
import home from '/home-logo.png'
import explore from '/explore.png'
import search from '/search.png'
import message from '/message.png'
import notification from '/notification.png'
import Create from "./Create";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Sidebar = () => {

  const username = JSON.parse(localStorage.getItem("user"))?.username;

  return (
    <div>
      {/* Side Bar Section  */}
      <div className="sidebar">
        <div className="logo">
          <img src={aura} alt="Logo" className="logo-img" />
        </div>

        <ul>
          <li>
            <Link to='/'>
            <img src={home} alt="" className="logo-img-bar" /> Home
            </Link>
          </li>
          <li>
            <Link to="/">
            <img src={explore} alt="" className="logo-img-bar" />
            Explore
            </Link>
          </li>
          <li>
            <img src={search} alt="" className="logo-img-bar" />
            Search
          </li>
          <li>
            <img src={message} alt="" className="logo-img-bar" />
            Messages
          </li>
          <li>
            <img src={notification} alt="" className="logo-img-bar" />
            Notifications
          </li>
          <li>
            <Create/>
          </li>
          <li><Link to={`/u/${username}`} >{username}'s Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
