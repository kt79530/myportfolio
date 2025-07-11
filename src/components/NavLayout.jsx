
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../css/_Nav.scss';


function NavLayout() {
  return (
    <div className='navlayout-container'>
      <div className="vertical-nav">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/works" className="nav-link">Works</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    
    <main className='content-area'>
    <Outlet/>
    </main>
    
    </div>
        
  );
}

export default NavLayout;
