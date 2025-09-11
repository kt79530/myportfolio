
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import '../css/_Nav.scss';

function NavLayout() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/home') {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [location.pathname]);

  return (
    <div className="navlayout-container">
      {/* 가로 네비게이션 */}
      <nav className={`horizontal-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/works" className="nav-link">Works</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>

      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default NavLayout;
