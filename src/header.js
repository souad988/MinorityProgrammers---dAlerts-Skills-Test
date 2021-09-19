import React from 'react'
import './home.css' 
function Header() {
    return (
        <div>
            <div className="header_logo"> 
                 <img src="../bell.png" alt=''></img>
                 <h5>My Alerts</h5>
            </div>
           <div className="header_buttom"></div> 
        </div>
    )
}

export default Header
