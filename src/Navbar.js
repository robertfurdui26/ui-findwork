import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);

  const handleClick = () => setClick(!false);
  const closeMobileMenu = () => {
    setClick(false);
    setServicesDropdown(false);
    setCoursesDropdown(false);
  };

  const onMouseEnterServices = () => {
    if (window.innerWidth >= 900) {
      setServicesDropdown(true);
    }
  };

  const onMouseLeaveServices = () => {
    if (window.innerWidth >= 900) {
      setServicesDropdown(false);
    }
  };

  const onMouseEnterCourses = () => {
    if (window.innerWidth >= 900) {
      setCoursesDropdown(true);
    }
  };

  const onMouseLeaveCourses = () => {
    if (window.innerWidth >= 900) {
      setCoursesDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Find Work <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterServices}
            onMouseLeave={onMouseLeaveServices}
          >
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Servici <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterCourses}
            onMouseLeave={onMouseLeaveCourses}
          >
            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
              Profile Constructori <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/teacher' className='nav-links' onClick={closeMobileMenu}>
              Sudura
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Adauga Serviciu
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
