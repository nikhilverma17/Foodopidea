import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';
import { IoIosRefresh } from "react-icons/io";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  const handleRefresh = () => {
    window.location.reload(); // Reloads the current page
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <nav className={`navbar bg-green flex align-center ${scrolled ? 'scrolled' : ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to="/" className='navbar-brand fw-3 fs-22 flex align-center'>
            <img src={require('./logo.png')} className='logo' alt="Logo" />
              <span className='navbar-brand-text fw-7'>Foodopedia</span>
            </Link>
            <div className='navbar-btns flex align-center'>
            <button type="button" className='refresh-btn text-white text-uppercase fs-14' onClick={handleRefresh}>
          <IoIosRefresh className='btn-icon' size={25} />

        </button>
              <button type="button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
