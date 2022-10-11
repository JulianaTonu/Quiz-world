import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        
       <div  className =' navbar'>
        
        
        <h2 className='text-white'>Quiz World</h2>
         <div className='navItems'>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/home'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/topics'>Topics</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to  ='/Statics'>Statics</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/blog'>Blog</NavLink>
            {/* <NavLink to='/'>Juliana Tonu</NavLink> */}
        </div>

       </div>
    );
};

export default Navbar;