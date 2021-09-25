import axios from 'axios';
import React,{useState} from 'react'

function AddAlert({coins,exchanges}) {
    const [token_address,setToken_address]=useState('');
    const [chain,setChain]=useState('');
    const [exchange,setExchange]=useState('');
    const [target_price,setTarget_price]=useState(0);
    const [above_or_below,setAbove_or_below]=useState('below');
    const [notification_type,setNotification_type]=useState('')
    function handelSubmit(event){
        event.preventDefault()
      const send=async()=>{   
        await axios({
            mode:'cors',
            headers:{
                    
                     'ContentType':'application/json'
                    },
            method: 'post',
            url: `http://localhost:3001`,
            data: { 'token_address': token_address,
                    'chain':chain,
                    'exchange':exchange,
                    'target_price':target_price, 
                    'above_or_below':above_or_below,
                    'notification_type':notification_type
                  },
        }).then((res) => {
                console.log('then...',res.data)
        }).catch( (error)=> {
            if (error.response) {
               //server responded to the request
                if(error.response.status===400){
                        console.log(error.response.data)
                       
                 
                }else {
                    if(error.response.status===500){
                        alert('server doesn\'t responde try again' )
                      } 
                  }
  
            } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                   } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }  
          })
        }
        send();  
    }
    return (
        <div className="add_alert_container">
             <form >
                 <div className="add_alert_input_row1">
                     <h5>TOKEN ADRESS</h5>
                     <input type='text' placeholder='put token address' onChange={(e)=>setToken_address(e.target.value)}></input>
                 </div>
                 <div className="add_alert_input_row2">
                     <div><h5>CHAIN</h5>
                     <select
                            value={chain}
                            onChange={e => setChain(e.target.value)}>
                            {
                            coins.map(coin=> (
                            <option key={coin.id} value={coin.symbol}>
                               
                                {coin.symbol+'('+coin.name+')'}</option>
                             ))}
                    </select>
                     </div>
                     <div>
                     <h5>EXCHANGE</h5>
                     <select
                            value={exchange}
                            onChange={e => setExchange(e.target.value)}>
                            {exchanges.map(o => (
                            <option key={o.id} value={o.id}>{o.name}</option>
                             ))}
                    </select>
                     </div>
                 </div>
                 <div className="add_alert_input_row3">
                    <div> 
                        <h5>TARGET PRICE</h5>
                        <input type='number' step='0.01' placeholder='0$' onChange={(e)=>setTarget_price(e.target.value)}></input>
                     </div>
                     <div>
                        <h5>ABOVE OR BELOW</h5>
                        <select value={above_or_below} onChange={(e)=>setAbove_or_below(e.target.value)}>
                            <option key='1' value='above'>ABOVE</option>
                            <option key='2' value='below'>BELOW</option>
                        </select>
                        </div> 
                 </div>
                 <div className="add_alert_input_row1">
                     <h5>NOTIFICATION TYPE</h5>
                     <input type='text' placeholder='put notification type' onChange={(e)=>setNotification_type(e.target.value)}></input>
                 </div>
                 <button onClick={(e)=>handelSubmit(e)}></button>
             </form>
        </div>
    )
}

export default AddAlert;
