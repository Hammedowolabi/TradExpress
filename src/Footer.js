import React from 'react';
import {RiWhatsappFill} from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle  } from "react-icons/ai";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container rr">
                <div className='Product-footer'>
                    <h3>Products</h3>
                    <a href="top#">Bitcoin</a><br />
                    <a href="top#">Alt</a><br />
                    <a href="top#">Fiat</a><br />
                    <a href="top#">Refill</a><br />
                    <a href="top#">P2P</a>
                </div>
                <div className='Learn-footer'>
                    <h3>Learn</h3>
                    <a href="top#">Blog</a><br />
                    <a href="top#">Help Center</a><br />
                </div>
                <div className='Contacts-footer'>
                    <h3>Contacts</h3>
                    <a href="top#">+2348107684882</a><br />
                    <a href="top#">hammedowolabi22@gmail.com</a>
                    <p><RiWhatsappFill/> <FiInstagram/> <BsFacebook/> <AiFillTwitterCircle/></p>
                </div>

                <div className='Company-footer'>
                    <h3>Company</h3>
                    <a href="top#">About Us</a>
                    <a href="top#">Careers</a>
                    <a href="top#">Rates</a> 
                    <a href="top#">Mobile</a>
                </div>
                <div className='Legal-footer'>
                    <h3>Legal</h3>
                    <a href="top#">Privacy Policy</a>
                    <a href="top#">Anti-Money Laundering</a>
                    <a href="top#">Terms and Conditions</a>
                </div>
            </div>

        </div>
    )
}

export default Footer