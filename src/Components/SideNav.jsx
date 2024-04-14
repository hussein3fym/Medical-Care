import React from "react";
import "./../styles/SideNav.css";
import { NavLink } from "react-router-dom";
import Icon from "./../assets/icon.png";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillCustomerService } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillWindows } from "react-icons/ai";
const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="SideIcon">
        <AiFillAndroid className="sideIcon" />
        <AiFillCustomerService className="sideIcon" />
        <AiFillGithub className="sideIcon" />
        <AiFillGooglePlusCircle className="sideIcon" />
        <AiFillWindows className="sideIcon" />
      </div>
      <img className="Icon" src={Icon} alt="TrainerIcon" />
      <nav>
        <ul className="Dash-links">
          <li>
            <NavLink to="/" className="StyledNavLink">
              Ask
            </NavLink>
          </li>
          <li>
            <NavLink to="/ExercisesForm" className="StyledNavLink">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/BlogForm" className="StyledNavLink">
              H
            </NavLink>
          </li>
          <li>
            <NavLink to="/ClientForm" className="StyledNavLink">
              Clients
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
