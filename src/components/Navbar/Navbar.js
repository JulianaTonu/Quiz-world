import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        
       <div  className =' navbar'>
        
        
        <h2 className='text-white'>Quiz World</h2>
         <div className='navItems'>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/home'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/about'>Topics</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to  ='/Friends'>Statics</NavLink>
            <NavLink className={({isActive})=> isActive ? 'active' :undefined} to ='/contact'>Blog</NavLink>
            {/* <NavLink to='/'>Juliana Tonu</NavLink> */}
        </div>
       </div>
    );
};

export default Navbar;