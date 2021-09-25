import React from 'react'
import { Link } from 'react-router-dom'
import './home.css' 
function Header() {
    return (
        <div>
            <div className="header_logo"> 
                <Link to="/login" className="login_img">
                    <img src="../bell.png" alt="" />
                </Link>
                
                 <h5>My Alerts</h5>
            </div>
           <div className="header_buttom"></div> 
        </div>
    )
}

export default Header
