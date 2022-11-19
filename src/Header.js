import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './TradImages/logo.png'
import Glogo from './TradImages/Group 68.svg'
import Alogo from './TradImages/Group 69.svg'
import BackG from './TradImages/Group 127.png'
// import Rings from './TradImages'



const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg">
                <Container className='Header-container'>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Instant Buy/Sell</Nav.Link>
                            <Nav.Link href="#link">Learn</Nav.Link>

                            <NavDropdown.Item href="#action/3.1"><button className='btn-login1'>Login</button></NavDropdown.Item> <br />
                            <NavDropdown.Item href="#action/3.2">
                                <button className='btn-getstarted'> Get started</button>
                            </NavDropdown.Item>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='container dd'>
                <div className='header-text'>
                    <h1> By,sell and manage your crypto on TradExpress </h1>
                    <p>Easily trade cryptocurrency like BTC, USDT,ETH,LTC,& SRP with NGN</p>
                </div>
                <button className='btn-getstarted2'>Get Started</button> <br /> <br />
                <div className='redirect'>
                    <div className='apple-store'>
                        <img src={Glogo}alt="" />
                    </div>
                    <div className='play-store' >
                        <img src={Alogo} alt="" />

                    </div>
                </div>
            </div>
            <div className='aa'>
                <img className='background-image' src={BackG} alt="" />
            </div>
        </div>
    )
}

export default Header