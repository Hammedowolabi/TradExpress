import React from 'react'
import bayo from './TradImages/bayo.png'
import olagoke from './TradImages/olagoke.png'
import ireti from './TradImages/ireti.png'


const Article6 = () => {
    return (
        <div className='Article6'>
            <div className='Container'>
                <div className='customer-review'>
                    <h2>Customer's Review</h2>
                </div>

                <div className='customer-pic'>
                    <img src={ireti} alt="" />
                    <img src={olagoke} alt="" />
                    <img src={bayo} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Article6