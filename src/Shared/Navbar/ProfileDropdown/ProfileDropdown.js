import React, { useEffect, useRef, useState } from "react";
import "./ProfileDropdown.css";

import userProfile from '../../../asset/user-profile.svg'
import settingsIcon from '../../../asset/setting-icon.svg'
import { NavLink } from "react-router-dom";


export default function ProfileDropdown({onSelect}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  
  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    // onSelect(option);
    setIsActive(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
      <div className="menu-container ">
        <button onClick={toggleDropdown} className="menu-trigger">
        <img
            src={userProfile}
            alt="User avatar"
          />
          <span>Ruhma Tariq</span>
          <i class="fa fa-angle-down"></i>
          
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className='user-email'>ruhmaTraiq007@gmail.com</div>
          <ul onClick={handleOptionClick} className="ps-3">
            <li>
              <a href="#"><i class="fa-regular fa-circle-user"></i>My Profile</a>
            </li>
            <li>
              <NavLink to='/postedJobsList'><i class="fa-regular fa-heart"></i>Saved Jobs</NavLink>
            </li>
            <li>
              <NavLink to='/postjobone'><i class="fa-solid fa-briefcase"></i> Post Jobs</NavLink>
            </li>
            <li>
              <a href="#"><i class="fa-regular fa-comment-dots"></i>Reviews</a>

            </li>
            <li>
              <a href="#"><img src={settingsIcon}/>Settings</a>
            </li>
            <li>
              <a href="#"><i class="fa-regular fa-circle-question"></i>Help Center</a>
            </li>
          </ul>
          <div className="signout-button">Sign Out</div>
        </nav>
      </div>
  );
}
