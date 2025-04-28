import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { LanguageContext } from '../context/LanguageContext'
import translations from "./Translation.js";
const NavMenu = () => {
  const { pathname } = useLocation()

  const { language, changeLanguage } = useContext(LanguageContext);

  
  const isActive = (path) =>
    pathname === path ? 'text-cyan-500 font-semibold' : 'text-[#001C27]'

  const menu = (
    <>
      <li><Link className={isActive('/')} to="/">Home</Link></li>
      <li><Link className={isActive('/appointment')} to="/appointment">Appointment</Link></li>
      <li><Link className={isActive('/blogs')} to="/blogs">Blogs</Link></li>
      <li><Link className={isActive('/about')} to="/about">About</Link></li>
      <li><Link className={isActive('/services')} to="/services">Services</Link></li>
      <li><Link className={isActive('/contact')} to="/contact">Contact</Link></li>
    </>
  )

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
     
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl text-cyan-500 font-bold flex items-center gap-1">
            <FontAwesomeIcon icon={faClinicMedical} className="me-2" />
            {translations[language].dr_name}

          </Link>
        </div>

        {/* Center menu for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}
          </ul>
        </div>

        {/* Right: Toggle + Hamburger */}
        <div className="navbar-end flex items-center gap-2">
          {/* Language Toggle */}
          {language == "bn" ? <button onClick={() => changeLanguage("en")} className="btn btn-sm text-sm border rounded-md hover:bg-gray-100">
            EN
          </button>:  <button onClick={() => changeLanguage("bn")} className="btn btn-sm text-sm border rounded-md hover:bg-gray-100">
          বাংলা
          </button>}
          
        

          {/* Hamburger menu for small screens */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
