import React from 'react'
import './home.css'
function Alert({evenOdd,k}) {
    return (
        
        <div  className={'alert'+evenOdd}>
          <div ><img id={'alert_img_logo'+k} src='../search.png' alt=''></img>symbole</div>
          <div  className="alert_exchange" ><div>exchange </div><small >ether</small></div>  
          <div > alert price</div>
          <div > current price</div>
          <div > notification type</div>
          <div > <button id={'alert_cancel_button'+k} className={"btn_cancel"+evenOdd}>CANCEL</button></div>
        </div>
    )
}

export default Alert;
