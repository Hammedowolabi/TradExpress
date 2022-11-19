import React from 'react'
import Cpic from './TradImages/createmobile.png'
import Dpic from './TradImages/depositgirl.png'
import Bpic from './TradImages/buy_sellgirl.png'
import Emoji1 from './TradImages/emojione-monotone_keycap-1.png'
import Emoji2 from './TradImages/emojione-monotone_keycap-2.png'
import Emoji3 from './TradImages/emojione-monotone_keycap-3.png'

const Article4 = () => {
    return (
        <div className='Article4'>
            <div className='container'>
                <h3 className='text-Article4'>Buy and Sell Cryptocurrency in 3 simple steps </h3> 
                <div className='create-account'>
                    <div className='create-account-text'>
                        <strong> <img src={Emoji1} alt="" />   Create a free Account</strong> 
                        <small>sign up for your free Tradexpress wallet on web, iOS or,Android device and follow our easy process to set up your profile.</small>

                    </div>
                    <img className='Cpic' src={Cpic} alt="" />

                </div> 

                <div className='deposit'>
                  <img className='Dpic' src={Dpic} alt="" />
                    <div className='deposit-text'>
                        <strong> <img src={Emoji2} alt="" />   Deposit</strong> 
                        <small> Choose  your prefered deposits option like bank transfer, credit/debit card or send digital assets directly to your wallet for easy funding/withdrawal</small>
                    </div>
                </div> 

                <div className='buyandcrypto'>
                    <div className='buyandcrypto-text'>
                        <strong>  <img src={Emoji3}alt="" /> Buy/Sell Crypto</strong> 
                        <small> Sign up for free Tradexpress Wallet on web, iOS, or Android device and follow our easy process to set your profile</small>
                    </div>
                    <img className='Bpic' src={Bpic} alt="" />

                </div>

            </div>

        </div>

    )
}

export default Article4