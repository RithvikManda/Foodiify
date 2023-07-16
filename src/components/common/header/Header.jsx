import React from 'react'
import "./Header.css"
import {CiLocationOn} from "react-icons/ci"
import {MdOutlineArrowDropDown} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {RiArrowDropDownLine} from "react-icons/ri"


function Header() {
  return (
    <div className='max-width header'>
      {/* <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" className='header-logo'/> */}

      <div className='header-logo'>Foodify</div>

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <CiLocationOn className='fi fi-rr-marker absolute-center location-icon'/>
              <div className="">Bangalore</div>
            </div>
            <MdOutlineArrowDropDown className='fi fi-rr-caret-down absolute-center' style={{fontSize:"20px"}}/>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchbar">
            <BsSearch className='absoulte-center search-icon'/>
            <input type="text" placeholder='Search for restaurant, cuisine or dish' className='search-input' />        
          
          </div>
        </div>
        <div className="profile-wrapper">
        <img src="https://b.zmtcdn.com/data/user_profile_pictures/61d/d657df2a6367c4d36b85ef8266a7861d.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt='logo' className='header-profile-image'/>
        <span className='header-username'>Rithvik</span>
        <RiArrowDropDownLine className='absolute-center profile-options-icon' />
        </div>
      </div>
    </div>
    
  )
}

export default Header