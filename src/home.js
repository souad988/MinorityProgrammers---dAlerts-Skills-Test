import React ,{useState,useEffect}from 'react'
import Alert from './Alert'
import axios from 'axios'
import './home.css'
import AddAlert from './AddAlert'
import listReactFiles from 'list-react-files'
import coinListe from './coinListe.js'

function Home() {
    const [showAddAlert,setShowAddAlert]=useState(false);
    const [coins,setCoins]=useState();
    const [exchangs,setExchanges]=useState();
    useEffect(()=>{
        axios.get('https://localhost:3000').then((res)=>{
        console.log(res.data);
    })
    },[]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res)=>{
        console.log(res.data);
        setCoins(res.data);
        }
        )
        return () => {
            
        }
    }, [])
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/exchanges').then((res)=>{
        console.log(res);
        setExchanges(res.data);
        }
        )
        return () => {
            
        }
    }, [])

    /*
    function createTokensListe(TokenAdressListe,apiRes){
       var myListe=apiRes.filter((coin)=>{
           if(coin.address)
       })
    }
    function removeExtention(fileNameListe){
        return fileNameListe.map((fileName)=>{
          if(fileName.includes('-1')){
            return fileName.slice(0,-6)
          }else{
          return fileName.slice(0,-4)
          }
          });
    }

     */
    return (
        <div className="home_container">
        <div className="alerts_container">
        <div className="alerts">
                    <div className="alerts_header">
                     <div>SYMBOLE</div> <div style={{display:'inline-block',textAlign:'center'}}><div>EXCHANGE </div> <small style={{fontWeight:'lighter'}}>ghgh</small></div><div>ALERT PRICE</div> <div>CURRENT PRICE</div> <div>NOTIFICATION TYPE</div><div><button className="btn_add_alert" onClick={()=>setShowAddAlert(!showAddAlert)}>+ new alerts</button></div>
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
        {showAddAlert?<AddAlert coins={coins} exchanges={exchangs}/>:''}
        
        
        </div>
    )
}

export default Home;
