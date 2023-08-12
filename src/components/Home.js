import React from 'react'
import GotoUp from './GotoUp'
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GetStartedBtn from './GetStartedBtn';

export default function Home() {
  const Services = [
    {
      icon: require('../img/s2.png'),
      title: 'Mobile App',
      title2: 'Development',
      content: 'Codeair develop Native & Hybrid apps with required featues that will stand out in the android and iOS market'
    },
    {
      icon: require('../img/s1.png'),
      title: 'Website ',
      title2: 'Development',
      content: 'web development is the building and maintenance of websites.'
    },
    {
      icon: require('../img/s3.png'),
      title: 'UI/UX Designing',
      content: '“Design creates culture. Culture shapes values.Values determine the future.”'
    },
    {
      icon: require('../img/digital-ocean.png'),
      class_n: "digital-logo",
      // icon: require('../img/s3.png'),
      title: 'Digital ',
      title2: 'Marketing',
      content: 'Digital marketing lets you communicate with your customers in real-time.'
    }
  ]
  const Tech_Img = [
    {
      img: require('../img/t-1.png')
    },
    {
      img: require('../img/t-2.png')
    },
    {
      img: require('../img/t-3.png')
    },
    {
      img: require('../img/t-4.png')
    },
    {
      img: require('../img/t-5.png')
    },
    {
      img: require('../img/t-6.png')
    },
    {
      img: require('../img/t-7.png')
    },
    {
      img: require('../img/t-8.png')
    },
    {
      img: require('../img/t-9.png')
    },
    {
      img: require('../img/t-10.png')
    }
  ]

  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <>
      <Header />
      <GotoUp />
      {/* --------------------------- Start Expanding possibility Section --------------------------------*/}
      <section id='expanding-section' data-aos="fade-up">
        <div className='container' data-aos="fade-up">
          <div className="row justify-center">
            <div className="col-md-6 col-12 i-col text-white align-center">
              <div className='amimate-title'>
                <div className='expanding-detail'>
                  <h1> Expanding <br />possibility of <br />better tomorrow </h1>

                  <p>We are always striving for fresh and innovative project ideas that can challenge our teams' skill set and result in a unique solution.</p>
                </div>
                <div className='d-flex justify-content-md-start justify-content-center'>
                  {/* <Link to='/contact'><input type="button" value="Contact us" className='btn-theme' /></Link> */}
                  <GetStartedBtn />
                  <a href="#services-sec"><input type="button" value="Services" className='btn3-theme ms-10px' /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 i-col2">
              <div className='d-flex '>
                <img src={require("../img/ICON.png")} alt="" width="80%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- End Expanding possibility Section --------------------------------*/}

      {/* --------------------------- Start Services We Provide Section --------------------------------*/}
      <section id='services-sec' data-aos="fade-up">
        <div className='container' >
          <div className='section-title  text-center' >
            <h1>Services We Provided</h1>
          </div>
          <div className='row justify-center mt-4'>
            {
              Services.map((items) => (
                <div className="col-lg-3 col-sm-6 align-center mt-4">
                  <div className='services-div'>
                    <img src={items.icon} alt="" srcset="" className={items.class_n} />
                    <h3> {items.title} </h3>
                    <h4> {items.title2} </h4>
                    <p> {items.content} </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='white-circle'>
          <img src={require('../img/circle.png')} alt="" />
        </div>
        <div className='black-circle'>
          <img src={require('../img/black_line.png')} alt="" />
        </div>
      </section>
      {/* --------------------------- End Services We Provide Section Section --------------------------------*/}

      {/* --------------------------- Start Codeair’s Core Values Section --------------------------------*/}
      <section className='value-section' data-aos="fade-up">
        <div className='container'>
          <div className="row">
            <div className="col-md-6 col-12 i-col text-white align-center">
              <div className='value-content section-title'>
                <h1>Codeair’s Core Values</h1>
                <p>Codeair’s Core value is to maintain Quality, Committed to Clients <br className='e-br' />and growth of employees and clients</p>
                <div>
                  <ul>
                    <li><img src={require('../img/CHECK-BOX.png')} alt="" />Quality</li>
                    <li><img src={require('../img/CHECK-BOX.png')} alt="" />Commitments</li>
                    <li><img src={require('../img/CHECK-BOX.png')} alt="" />Growth</li>
                  </ul>
                </div>
                <div className='pt-2 d-sm-block d-none'>
                  {/* <input type="button" value="Get stated" className='btn-theme mt-2' /> */}
                  <GetStartedBtn />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 i-col2 value-img">
              <div className='justify-center align-center'>
                <img src={require("../img/icon-2.png")} alt="" width={"75%"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- End Codeair’s Core Values Section --------------------------------*/}

      {/* --------------------------- Start our Mission Section --------------------------------*/}
      <section className='our-mission-section' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className='align-center mission-img'>
                <img src={require("../img/icon-3.png")} alt="" width={"75%"} />
              </div>
            </div>

            <div className="col-md-6 col-12 align-center our-mission-content">
              <div className="section-title">
                <h1>Our Mission</h1>
                <p>Our Mission at Codeair is giving happiness, Quality and satifation <br className='e-br' />of our employees and Clients.</p>
                <div className='pt-2'>
                  <GetStartedBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='triangle-design'>
          <img src={require('../img/triangle.png')} alt="" />
        </div>
      </section>
      {/* --------------------------- End our Mission Section --------------------------------*/}

      {/* --------------------------- Start Technologies we Served Section --------------------------------*/}
      <section id="technology-section" data-aos="fade-up">
        <div className="container">
          <div>
            <div className='section-title text-center'>
              <h1>Technologies we Served</h1>
            </div>
          </div>
          <div className="tech-img">
            <div className="row row-3 justify-center ">
              {
                Tech_Img.map((i) => (
                  <div className="col1 text-center p-0 ">
                    <div className='tech-img-bg m-10px'>
                      <img src={i.img} alt="" className='zoom' />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='dimond-2'>
            <img src={require('../img/dimmond2.png')} alt="" />
          </div>
        </div>
      </section>
      {/* --------------------------- End Technologies we Served Section --------------------------------*/}

      {/* --------------------------- Start What users say about us --------------------------------*/}
      <section id='user-section' data-aos="fade-up">
        <div className="container">
          <div className='section-title text-center'>
            <h1>What users say about us</h1>
            <p>Build a Brand with Us. We strive to be the best Web & Mobile Design & <br />Development Company in India and worldwide.</p>
          </div>
          <div className="user-sub-sec text-white">
            <div className="row">

              <div className="col-md-4 col-sm-6 first-div He-auto">
                <div className='user-div theme-dark-gray mb-10px'>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Great work with Codeair Technologies! Also when something did not go as expected, the task still had prior and then solved. Recommend!</p>
                  <b>Elena O'Connor</b>
                  <pre>Canada</pre>
                </div>
                <div className='user-div theme-dark-gray mb-10px'>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Codeair has a very neat and user-friendly panel to manage all activities. They have a very powerful API set with really clear documentation.</p>
                  <b>Livina C.</b>
                  <pre>Italy</pre>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className='user-div theme-dark-gray mb-10px'>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Very Good company. Their result driven approch has done wonder for us. Keep it up Codeair Team.</p>
                  <b>Marrie Otten</b>
                  <pre>Sweden</pre>
                </div>
                <div className='user-div theme-dark-gray mb-10px'>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Everthing was Top standerd, the decor thoughout was lovely. Clear and well maintained.</p>
                  <b>Tom Liston</b>
                  <pre>USA</pre>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 user-third-div">
                <div className='user-div theme-dark-gray mb-10px '>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Very good communication and appropriate timing for the service provided. Very high quality of work, we will probably contact them again if there is an opportunity!</p>
                  <b>Raquel hurtado</b>
                  <pre>Italy</pre>
                </div>
                <div className='user-div theme-dark-gray mb-10px '>
                  <span>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-fill'></AiTwotoneStar>
                    <AiTwotoneStar className='star-unfill'></AiTwotoneStar>
                  </span>
                  <p>Really, Codeair was excellent. you will definitely satisfy with their sevices.</p>
                  <b>Javier Kohen</b>
                  <pre>UK</pre>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >
      {/* --------------------------- End What users say about us --------------------------------*/}

    </>

  )
}
