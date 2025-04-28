import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons'

const NavMenu = () => {
  const { pathname } = useLocation()
  const [lang, setLang] = useState('en')

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'bn' : 'en')
  }

  const isActive = (path) =>
    pathname === path ? 'text-cyan-500 font-semibold' : 'text-[#001C27]'

  const labels = {
    en: {
      home: 'Home',
      appointment: 'Appointment',
      blogs: 'Blogs',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      brand: 'DR SHAHIDA'
    },
    bn: {
      home: 'হোম',
      appointment: 'অ্যাপয়েন্টমেন্ট',
      blogs: 'ব্লগ',
      about: 'সম্পর্কে',
      services: 'সেবা',
      contact: 'যোগাযোগ',
      brand: 'ডা. শাহিদা'
    }
  }

  const menu = (
    <>
      <li><Link className={isActive('/')} to="/">{labels[lang].home}</Link></li>
      <li><Link className={isActive('/appointment')} to="/appointment">{labels[lang].appointment}</Link></li>
      <li><Link className={isActive('/blogs')} to="/blogs">{labels[lang].blogs}</Link></li>
      <li><Link className={isActive('/about')} to="/about">{labels[lang].about}</Link></li>
      <li><Link className={isActive('/services')} to="/services">{labels[lang].services}</Link></li>
      <li><Link className={isActive('/contact')} to="/contact">{labels[lang].contact}</Link></li>
    </>
  )

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        {/* Brand */}
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl text-cyan-500 font-bold flex items-center gap-1">
          <FontAwesomeIcon icon={faClinicMedical} className="me-2" />
            {labels[lang].brand}
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
          <button onClick={toggleLanguage} className="btn btn-sm text-sm border rounded-md hover:bg-gray-100">
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>

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
