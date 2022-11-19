import React from 'react'
import { useState,useEffect } from 'react'
import arrowup from './TradImages/ArrowUp.png'
import arrowdown from './TradImages/ArrowDown.png'

const Article = () => {
    // const [value, setValue] = useState(0)
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    



    
   

 
    useEffect(()=>{
        setTimeout(()=>{

            fetch('https://api.coinlore.net/api/tickers/?start=0&limit=6')
              .then((res) => res.json())
              .then((rep) => setData(rep.data) ,setIsLoading(false))
        },8000)

    })
    if(isLoading){
        return(
            <div>
                <h2>Loading,please wait</h2>
            </div>
        )
    }
  return (
    <div>
        <div className=' container article-datum'>
            {data.map((datum)=>{
            
                const {id,symbol,price_usd,price_btc} = datum
                return(
                    <div id='datum' key={id}>
                        <h3> {symbol}/USD </h3> 
                        <p> ${price_usd}</p>
                        <small>{price_btc} <img src={price_btc>= 1 ? arrowup:arrowdown}alt="" />  </small> 
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Article 