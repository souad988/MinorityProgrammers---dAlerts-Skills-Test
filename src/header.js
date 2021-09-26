import React from 'react'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './home.css' 
function Header() {
    return (
        <div>
            <div className="header_logo"> 
               
                <Link to="/" className="login_img">
                    <img src="../bell.png" alt="" />
                </Link>
                
                <div> <h5>My Alerts</h5></div>
                <div></div>
                <Link to="/login" className="header_login">
                     <AccountCircleIcon className="AccountCircleIcon" />
                     <h2>login</h2>
               </Link>
            </div>
           <div className="header_buttom"></div> 
        </div>
    )
}

export default Header
