import React from 'react';
import {FaSearch, FiMenu} from "react-icons/all";
import logo from '../images/w-logo.png'

const NavBar = ({setIsSideOpen}) => {
    return (
        <div className={'navbar'}>
            <div className="search">
                <FaSearch/>
                <input type="text" className="input" placeholder={'Search in app'}/>
            </div>
            <div className="menu">
                <div className={'btn'} onClick={()=>setIsSideOpen(true)}>
                    <FiMenu />
                </div>
                <img src={logo} alt="" className="logo"/>
            </div>
        </div>
    );
};

export default NavBar;