import React from 'react'
import Epic from './TradImages/easymode.png'
import Fpic from './TradImages/financial.png'
import Ipic from './TradImages/investment.png'
import { useState } from 'react'



const Moredetails  = () => {
  return (
    <div>
        <div className='Article3'>
            <div className='container ff'>
                <div className='easymode'>
                    <img src={Epic} alt="" />
                    <h3>Easy Mode of Payment</h3>
                    <small>People can now easily send and receive money from anywhere in the world to purchase goods and pay services</small>

                </div>
                <div className='finance'>
                    <img src={Fpic} alt="" />
                    <h3> Financial Freedom</h3>
                    <small> Just like the internet no single entity controls the Cryto network which provide user transparency and privacy,which puts in absolute controls of your money.</small>

                </div> 
                <div className='investment'>
                    <img src={Ipic} alt="" />
                    <h3>Investment</h3>
                    <small>The constant demand as made Crytocurrencies a Digital Gold use for alternative store of wealth on long term investments</small>

                </div> 

            </div>
        </div>
    </div>
  )
}

const Article3 = () => {

    const [state,setState] = useState(false)
    return (


        
    <div className='learnmore'>
        <button className='seemore' onClick={()=> setState(!state)}>{state ? 'show less' : 'show more'}</button>
        {state && <Moredetails/>}
    </div>
        
    )
}






export default Article3