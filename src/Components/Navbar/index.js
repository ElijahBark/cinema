import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css'



const Navbar = () => {
    return  <nav className={style.main}>
        <NavLink className={style.text} to={'/popular/'} activeStyle={{color: '#F1FF40'}}>Popular</NavLink>
        <NavLink className={style.text} to={'/latest/'} activeStyle={{color: '#F1FF40'}}>Latest</NavLink>
        <NavLink className={style.text} to={'/upcoming/'} activeStyle={{color: '#F1FF40'}}>Upcoming</NavLink>
    </nav>
};

export default Navbar;
