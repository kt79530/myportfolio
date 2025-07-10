
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../css/_Nav.scss';
import Home from './Home';

function NavLayout() {
  return (
    <div className='navlayout-container'>
      <div className="vertical-nav">
        <NavLink to="/navlayout/home" className="nav-link">Home</NavLink>
        <NavLink to="/navlayout/about" className="nav-link">About</NavLink>
        <NavLink to="/navlayout/works" className="nav-link">Works</NavLink>
        <NavLink to="/navlayout/contact" className="nav-link">Contact</NavLink>
      </div>
    <main className='content-area'>
    <Home/>
    <Outlet/>
    
    </main>
    </div>
        
  );
}

export default NavLayout;
