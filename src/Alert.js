import React from 'react'
import './home.css'
function Alert({evenOdd,k}) {
    return (
        
        <div id={'alert'+k} className={'alert'+evenOdd}>
            {console.log('alert'+evenOdd)}
          <div><img src='../logos/0x4a080377f83D669D7bB83B3184a8A5E61B500608.png' alt=''></img>symbole</div>
          <div  className="alert_exchange" ><div>exchange </div><small >ether</small></div>  
          <div> alert price</div>
          <div> current price</div>
          <div> notification type</div>
          <div> <button className={"btn_cancel"+evenOdd}>CANCEL</button></div>
        </div>
    )
}

export default Alert;
