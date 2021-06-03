import React, {useState} from 'react';
import {
    AiOutlineMenuFold,
    AiOutlineMenuUnfold,
    BiChevronDown, FaAppleAlt, FaAtlassian, FaLayerGroup,
    FaRegBell, FaRegCommentAlt,
    FaSearch, FaTachometerAlt,
} from "react-icons/all";
import logo from '../images/logo.png'
import avatar from '../images/domnic-harris.png'
import {NavLink} from "react-router-dom";

const SideBar = ({isMenuOpen,setIsMenuOpen,isSideOpen}) => {


    const [userMenu, setUserMenu] = useState(false)
    const [hiddenMenu, setHiddenMenu] = useState(false)

    const openMenu = () => {
        setHiddenMenu(prev => !prev)
        if(isMenuOpen)
        setIsMenuOpen(false)
    }
    const closeMenu = () => {
        setIsMenuOpen(prev => !prev)
        if(hiddenMenu)
        setHiddenMenu(false)
        if(userMenu)
        setUserMenu(false)
    }

    return (
        <div className={`sidebar ${isMenuOpen ? 'mini' : ''} ${isSideOpen?'open':''}`}>
            <div className="container">
                <div className="header">
                    <div className="menu-btn" onClick={closeMenu}>
                        {
                            isMenuOpen ?
                                <AiOutlineMenuUnfold/>
                                : <AiOutlineMenuFold/>
                        }
                    </div>
                    <img src={logo} alt="" className="logo"/>
                </div>
                <div className="body">
                    <div className="about-user">
                        <div className="head">
                            <img className={'avatar'} src={avatar} alt=""/>
                            <p className={'name'} onClick={() => setUserMenu(prev => !prev)}>Rob Farnandies <BiChevronDown/>
                            </p>

                            <ul className={`user-menu ${userMenu ? 'show' : ''}`}>
                                <li className={'item'}>My Account</li>
                                <li className={'item'}>Connections</li>
                                <li className={'item'}>Logout</li>
                            </ul>
                        </div>

                        <ul className="icons-menu">
                            <li className={'icon'}><FaSearch/></li>
                            <li className={'icon'}><FaRegBell/></li>
                            <li className={'icon'}><FaRegCommentAlt/></li>
                        </ul>
                    </div>

                    <div className="menu-groups">
                        <div className="main-menu-group">
                            <p className="title">Main</p>
                            <ul className="menu-items-group">
                                <li className={`menu-item ${hiddenMenu ? 'active' : ''}`}>
                                    <p className={'link'} onClick={openMenu}>
                                        <BiChevronDown className={'down'}/>
                                        <FaTachometerAlt/><span>Dashboard</span>
                                    </p>

                                    <ul className={`hidden-menu ${hiddenMenu ? 'show' : ''}`}>
                                        <li className="hidden-item">Crypto</li>
                                        <li className="hidden-item">CRM</li>
                                        <li className="hidden-item">Listing</li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={''} className={'link'}>
                                        <FaAppleAlt/><span>Widgets</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={''} className={'link'}>
                                        <FaAtlassian/><span>Metrics</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={''} className={'link'}>
                                        <FaLayerGroup/><span>Layouts</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideBar;