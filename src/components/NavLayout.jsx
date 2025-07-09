
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../css/_Nav.scss';
import About from './About';

function NavLayout() {
  return (
    <>
    <div className="vertical-nav">
      <NavLink to="/nav/home" className="nav-link">Home</NavLink>
      <NavLink to="/nav/about" className="nav-link">About</NavLink>
      <NavLink to="/nav/works" className="nav-link">Works</NavLink>
      <NavLink to="/nav/contact" className="nav-link">Contact</NavLink>
    </div>
    <div className=''>
    <About/>
    <Outlet/>
    </div>
    </>
  );
}

export default NavLayout;
