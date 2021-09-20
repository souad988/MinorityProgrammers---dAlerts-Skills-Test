import React,{useState} from 'react'

function AddAlert({coins,exchanges}) {
    const [token_address,setToken_address]=useState('');
    const [chain,setChain]=useState('');
    const [exchange,setExchange]=useState('');
    const [target_price,setTarget_price]=useState(0);
    const [above_or_below,setAbove_or_below]=useState('below');
    const [notification_type,setNotification_type]=useState('')
    
    return (
        <div className="add_alert_container">
             <form>
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
                        <input type='number' placeholder='put target price' onChange={(e)=>setTarget_price(e.target.value)}></input>
                     </div>
                     <div>
                        <h5>ABOVE OR BELOW</h5>
                        <select value='above' onChange={(e)=>setAbove_or_below(e.target.value)}>
                            <option key='1' value='above'>ABOVE</option>
                            <option key='2' value='below'>BELOW</option>
                        </select>
                        </div> 
                 </div>
                 <div className="add_alert_input_row1">
                     <h5>NOTIFICATION TYPE</h5>
                     <input type='text' placeholder='put notification type' onChange={(e)=>setNotification_type(e.target.value)}></input>
                 </div>
                 <button ></button>
             </form>
        </div>
    )
}

export default AddAlert;
