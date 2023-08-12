import React from 'react'
import { Affix } from 'rsuite';
import { Link } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'


export default function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Change Nav color when scrolling
    const [color, setColor] = useState(false);
    const ChangeColor = () => {
        if (window.scrollY >= 89) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", ChangeColor);

    return (
        <>
            <Affix>
                <header className='full-pad ' class={color ? 'main-div-h header-bg' : 'main-div-h'}>
                    <div class='header container'  >
                        <div className='align-center'>
                            <div className="logo m-0 p-0">
                                <Link to='/'><img src={require('../img/logo (2).png')} alt="" width={"170px"} /></Link>
                            </div>
                        </div>
                        <div className='align-center'>
                            <nav class="navbar nav " data-spy="affix" data-offset-top="197">
                                <ul className='m-0'>
                                    <li><NavLink to="/" >home</NavLink></li>
                                    <li><NavLink to="/about-us" >about Us</NavLink></li>
                                    <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
                                    <li><Link>Services <span><FiChevronDown></FiChevronDown></span></Link>
                                        <ul>
                                            <li><NavLink to="/mobile-app-development">Mobile App Development</NavLink></li>
                                            <li><NavLink to="/website-development" >Website Development</NavLink></li>
                                            <li><NavLink to="/uiux" >UI/UX Designing</NavLink></li>
                                            <li><NavLink to="/digital" >Digital Marketing</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/contact-us" >Contact Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='align-center offCanva-btn'>
                            <button className='off-canvas-btn' onClick={handleShow}>
                                <HiBars3CenterLeft className=''></HiBars3CenterLeft>
                            </button>
                            <Offcanvas show={show} onHide={handleClose} className="w-5 theme-dark-gray">
                                <Offcanvas.Header closeButton>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='m-0 p-0'>
                                    <nav class="canva">
                                        <ul className='m-0 p-0'>
                                            <li className=''><NavLink to="/" >Home</NavLink></li>
                                            <li><NavLink to="/about-us" >About Us</NavLink></li>
                                            <li><NavLink to="/portfolio" >Portfolio</NavLink></li>
                                            <li><Link>Services <span><FiChevronDown></FiChevronDown></span></Link>

                                                <ul className='p-0'>
                                                    <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                                    <li><Link to="/website-development" >Website Development</Link></li>
                                                    <li><Link to="/uiux" >UI/UX Designing</Link></li>
                                                    <li><Link to="/digital" >Digital Marketing</Link></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact-us" >Contact Us</NavLink></li>
                                        </ul>
                                    </nav>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                </header>
            </Affix>
        </>
    )
}
