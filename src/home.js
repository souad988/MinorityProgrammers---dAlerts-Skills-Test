import React from 'react'
import Alert from './Alert'
import './home.css'

function Home() {
    return (
        <div className="alerts_container">
        <div className="alerts">
                    <div className="alerts_header">
                     <div>SYMBOLE</div> <div style={{display:'inline-block',textAlign:'center'}}><div>EXCHANGE </div> <small style={{fontWeight:'lighter'}}>ghgh</small></div><div>ALERT PRICE</div> <div>CURRENT PRICE</div> <div>NOTIFICATION TYPE</div><div><button className="btn_add_alert">+ new alerts</button></div>
                    </div>
                    <div className="alerts_separation"></div>
                     <div className="alerts_search">
                         <img src='../searchmy.png' alt=''></img>
                         SEARCH FOR TOKEN SYMBOL, EXCHANGE NAME, OR NOTIFICATION TYPE
                     </div>
                {[...Array(5)].map((item ,key)=> 
                         
                       (
                       <Alert evenOdd={key%2?'O':'E'} k={key} id={key} >
                           {console.log(key)}
                       </Alert>) 
                    )}
                    
                
                    
            
      
        </div></div>
    )
}

export default Home;
