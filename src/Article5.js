import React from 'react'
import Glogo from './TradImages/Groupandroid.png'
import Alogo from './TradImages/appstore.png'

const Article5 = () => {
    return (
        <div className='Article5'>
            <div className='container'>
                <div className='Article5-text'>
                    <p>Ready to trade Buy/sell Cryptocurrency in just 10 minutes?</p>
                    <h3>Create your account for free and Start trading today!</h3>
                </div> 
                <button className='btn-article5'> Get Started</button>
                <div className='Article5logo'>
                    <img className='Glogo2' src={Glogo} alt="" />
                    <img className='Alogo' src={Alogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Article5