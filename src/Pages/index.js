import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import CryptoPage from "./CryptoPage";

const Index = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSideOpen, setIsSideOpen] = useState(false)
    return (
        <div className={'home'}>
            <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isSideOpen={isSideOpen}/>
            <div className="main">
                <NavBar setIsSideOpen={setIsSideOpen}/>
                <div className="page">
                    <CryptoPage/>
                </div>
            </div>
            <div className={`bg ${isSideOpen?'show':''}`} onClick={()=>setIsSideOpen(false)}></div>
        </div>
    );
};

export default withRouter(Index);