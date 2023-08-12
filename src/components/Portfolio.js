import React from 'react'
import Header from './Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Portfolio() {
    const Portfolio_detail = [
        {
            img: require('../img/portfolio_img_1.png'),
            detail_1: 'document editor',
        },

        {
            img: require('../img/portfolio_img_2.png'),
            detail_1: 'shoping app',
        },
        {
            img: require('../img/portfolio_img_3.png'),
            detail_1: 'video templete',
        },
        {
            img: require('../img/portfolio_img_4.png'),
            detail_1: 'video editor',
        },
        {
            img: require('../img/portfolio_img_5.png'),
            detail_1: 'ev station',
        },
        {
            img: require('../img/portfolio_img_6.png'),
            detail_1: 'trip planer',
        },

        {
            img: require('../img/portfolio_img_7.png'),
            detail_1: 'music player',
        },
        {
            img: require('../img/portfolio_img_8.png'),
            detail_1: 'solar app',
        },
        {
            img: require('../img/portfolio_img_9.png'),
            detail_1: 'money manager',
        },

    ]

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            <section id='our-project' data-aos="fade-up">
                <div className="container">
                    <div className='portfolio-title text-center'>
                        <h6>// Latest Case Studies</h6>
                        <h1>Introduce Our Projects</h1>
                    </div>
                    <div className="row ">
                        {
                            Portfolio_detail.map((item) => (
                                <div className="col-lg-4 col-6 project-items justify-center">
                                    <div className="project-box" data-aos="fade-up">

                                        <div><img src={item.img} alt="" /></div>

                                        <div className="portfolio-info">
                                            <div className="overlay"></div>
                                            <div className='port-sub-detail'>
                                                <h5>{item.detail_1}</h5>
                                                <span>{item.deatil_2}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
