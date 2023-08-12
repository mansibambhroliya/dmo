import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiFillSkype } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { useLocation } from "react-router-dom";

export default function Footer() {

    const [isActive, setIsActive] = useState(false);
    const [isLink, setIsLink] = useState(false);

    const { pathname } = useLocation();


    useEffect(() => {
        AOS.init();
    }, []);

    // you can check a more conditions here
    // if (pathname === "*") return null; 
    
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="row main-footer pt-5" >
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 footer-box footer-box1">

                            <div className="img-size">
                                <Link to='/'><img src={require('../images/logo (2).png')} alt="" /></Link>
                            </div>
                            <div className="footer-icon hide-icon">
                                <div className=' d-flex justify-content-between'>
                                    <Link target='_blank' to="https://www.linkedin.com/company/codeair-linkedin/"><BiLogoLinkedin id='icon1'></BiLogoLinkedin></Link>
                                    <Link target='_blank' to="https://www.instagram.com/codeair_tech/"><BsInstagram id='icon2'></BsInstagram></Link>
                                    <Link target='_blank' to="https://join.skype.com/invite/h9KXTd6qsHgs"><AiFillSkype id='icon3'></AiFillSkype></Link>
                                </div>
                            </div>
                        </div>
                        {/* --------------- Accordian ----------------- */}
                        <div className="accordion hide-accordion ">
                            <div className="d-flex justify-content-between accordion-title"
                                onClick={() => setIsActive(!isActive)}
                                aria-controls="example-collapse-text"
                                aria-expanded={isActive}
                            >
                                <div className='align-center'><h6>Services</h6></div>
                                <div className='arrow-plus p-0'>{isActive ? '-' : '+'}</div>
                            </div>
                            <Collapse in={isActive}>
                                <div id="example-collapse-text">
                                    <ul className='footer-list ps-0'>
                                        <Link to='/mobile-app-development'> <li>Mobile App Development</li></Link>
                                        <Link to='/website-development'><li>Website Development</li></Link>
                                        <Link to='/uiux'><li>UI/UX Design</li></Link>
                                        <Link to='/digital'> <li>Digital Marketing</li></Link>
                                    </ul>
                                </div>
                            </Collapse >
                        </div>
                        <div className="accordion hide-accordion">
                            <div className="d-flex justify-content-between accordion-title"
                                onClick={() => setIsLink(!isLink)}
                                aria-controls="collapse-text2"
                                aria-expanded={isLink}
                            >
                                <div className='align-center'><h6>Company</h6></div>
                                <div className='arrow-plus p-0'>{isLink ? '-' : '+'}</div>
                            </div>
                            <Collapse in={isLink}>
                                <div id="collapse-text2">
                                    <ul className='footer-list ps-0'>
                                        <Link to='/'> <li>Home</li></Link>
                                        <Link to='/about-us'> <li>About Us</li></Link>
                                        <Link to='/portfolio'> <li>Portfolio</li></Link>
                                        <Link to='/contact-us'><li>Contact US</li></Link>
                                    </ul>
                                </div>
                            </Collapse >
                        </div>
                        {/* --------------- Accordian ----------------- */}

                        <div className="col-lg-3 col-md-4 col-sm-7 col-xs-6 col footer-box footer-box2 hide-footer-section">
                            <div className="footer-single-box">
                                <b className='title-footer'>Services</b>
                                <ul className='footer-list ps-0'>
                                    <Link to='/mobile-app-development'> <li>Mobile App Development</li></Link>
                                    <Link to='/website-development'><li>Website Development</li></Link>
                                    <Link to='/uiux'><li>UI/UX Design</li></Link>
                                    <Link to='/digital'> <li>Digital Marketing</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5 col-xs-6 col footer-box footer-box3 hide-footer-section">
                            <div className="footer-single-box">
                                <b className='title-footer'>Company</b>
                                <ul className='footer-list ps-0'>
                                    <Link to='/'> <li>Home</li></Link>
                                    <Link to='/about-us'> <li>About Us</li></Link>
                                    <Link to='/portfolio'> <li>Portfolio</li></Link>
                                    <Link to='/contact-us'><li>Contact US</li></Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-5 col-xs-12 col footer-box footer-box4">
                            <div className="footer-single-box email-contact">
                                <b className='title-footer'>Contact Us</b>
                                <div className="inpute-box d-flex justify-center" id='inpute-box'>
                                    <input type="email" placeholder='Enter your email' />
                                    <Link to='/contact-us'><input type="button" value='Contact us' className='btn-design' /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" footer-icon hide-icon-2 py-3">
                        <div className=' d-flex justify-content-between'>
                            <Link target='_blank' to="https://www.linkedin.com/company/codeair-linkedin/"><BiLogoLinkedin id='icon1'></BiLogoLinkedin></Link>
                            <Link target='_blank' to="https://www.instagram.com/codeair_tech/"><BsInstagram id='icon2'></BsInstagram></Link>
                            <Link target='_blank' to="https://join.skype.com/invite/h9KXTd6qsHgs"><AiFillSkype id='icon3'></AiFillSkype></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="footer-last-line text-center mt-sm-4 mb-sm-2">
                                © 2022 codeair. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
