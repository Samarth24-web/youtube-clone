import React from 'react'
import "./NavBar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom';

const NavBar = ({setSidebar}) => {
  return (
   <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img onClick={()=>setSidebar(pre=>!pre)} className="menu-icon" src={menu_icon} alt="menu icon logo" />
        <Link to='/'><img className="logo" src={logo} alt="logo image" /></Link> 
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='search' />
         <img src={search_icon} alt="search icon image" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="uplaoad icon image" />
        <img src={more_icon} alt="more icon image" />
        <img src={notification_icon} alt="notification icon image" />
        <img className="profile-icon" src={profile_icon} alt="profile image" />
      </div>
   </nav>
  )
}

export default NavBar
