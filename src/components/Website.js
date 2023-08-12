import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";

export default function Website({ props }) {

  const Web_Card = [
    {
      card_img: [require("../images/2.png")],
      card_title: 'Enterprise solutions',
      card_content: 'Codeair Technologies is a top enterprise web development company having specialized in creating multi-level enterprise-grade web solutions to meet various corporate needs. We develop bespoke enterprise web portals, eCommerce solutions, B2B and B2C applications, ERP and CRM software apps, Reporting, Billing & Secure Financial Transaction Processing Systems, etc.',
      li_1: "- Custom Enterprise Web Development",
      li_2: "- Custom ERP Software Development",
      li_3: "- CRM Software Development",
    },
    {
      card_img: [require("../images/0.png")],
      card_title: 'E-commerce',
      card_content: 'We fulfill all the technological requirements for Ecommerce business services.Codeair Technologies is an ecommerce services provider, has a team of intelligent business advisors and professional coders who can assist ecommerce clients with a variety of issues like:',
      li_1: "- Online ecommerce website design",
      li_2: "- Responsive ecommerce websites / web apps",
      li_3: "- Saas based ecommerce set up",
      li_4: "- Mobile commerce solutions"
    },
    {
      card_img: [require("../images/1.png")],
      card_title: 'Content Management System',
      card_content: 'We create content management system(CMS) software that allows people to generate, manage, and edit website content without requiring special technical skills. Content management system is a technology that allows you to create a website without having to write all of the code from scratch or have a coding language.'
    },
    {
      card_img: [require("../images/2.png")],
      card_title: 'Custom Web Development',
      card_content: 'We specialise in creating custom online solutions that are interactive, scalable, brand-oriented, and business-ready. Our goal is to create successful digital products that inspire creativity and increase business ROI.   Also, we provide custom web solutions tailored to your company\'s brand, goals, products, and services.'
    }
  ]

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <div id="services-web">
        {/* <div className="container ">
          <div className="row">
            <div className="col-12 main-title text-center">
            <div> <h2>{props.title}</h2></div> 
            </div>
          </div>
        </div> */}
        {/* ------------------section 1 start--------------- */}
        <section id='website-dev-section'>
          <div className='container'>
            <div className="row justify-center my-4" data-aos="fade-up">
              <div className="col-md-6 col-12 i-col text-md-start text-center align-center">
                <div className="services-title me-3">
                  <div className="mobaile-title"><h1>Website <br /> Devlopment</h1></div>
                  <div className="mobaile-text">{props.title1inner}</div>
                </div>
              </div>
              <div className="col-md-6 col-12 i-col2 justify-center">
                <div className="mb-4" style={{ width: [props.img1width] }}>
                  <img src={props.img1} alt="" className="" width='100%' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------sectin 1 End--------------*/}

        <div className="relative">
          <div className="icon1">
            <img src={props.icon1} alt="" />
          </div>
          <div id="center-section">
            <div className="container mb-5">
              <div className="row row-center-section">
                <div className="col-12" data-aos="fade-up">
                  <div className="mobaile-title">About Website Devlopment</div>
                  <div className="text-mobile-center">{props.center}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon2">
            <img src={props.icon2} alt="" style={{ bottom: [props.b] }} />
            <img
              src={props.icon2x}
              alt=""
              style={{ bottom: [props.b2], width: [props.ic] }}
            />
          </div>
        </div>

        {/* ----------------section 2 start----------------- */}
        <section className="what-we-provide" id="website-section-provide">
          <div className='container'>
            <div className="row " data-aos="fade-up">
              <div className="col-md-6 col-12  align-center">
                <div style={{ width: [props.img2width] }} className=" mb-4">
                  <img src={props.img2} alt="" width='100%' />
                </div>
              </div>
              <div className="col-md-6 col-12 align-center text-white text-md-start text-center">
                <div className="single-box-mobaile">
                  <div className="mobaile-title">{props.title2}</div>
                  <div className="mobaile-text mb-2">{props.title2inner}</div>
                  {/* <div className="mobaile-text">{props.title2inner2}</div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------section 2  end ---------------- */}

        {/* ------------------------------ Start Web Devlopment Card -------------------------- */}

        <section id="web-section-card">
          <div className="container" id="ui-ux-box" >
            <div className="row row-box-card" data-aos="fade-up">
              {
                Web_Card.map((item) => (
                  <div className="col-lg-6 col-md-6 col-12 out-div">
                    <div className="single-box-card">
                      <div className="image">
                        <img href="#" src={item.card_img} alt="" className="justify-center mb-2" />
                      </div>
                      <div className="content">
                        <h5>{item.card_title} </h5>
                        <p>{item.card_content}</p>
                        <ul>
                          <li> {item.li_1} </li>
                          <li> {item.li_2} </li>
                          <li> {item.li_3} </li>
                          <li> {item.li_4} </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* <section id="web-section-card">
          <div className="container my-4">
            <div className="row" data-aos="fade-up">
              {
                Web_Card.map((item) => (
                  <div className="col-lg-6 col-md-6 col-12 out-div">
                    <div className="card">
                      <div className="image">
                        <div>
                          <img href="#" src={item.card_img} alt="" width="25%" className="justify-center mb-2" />
                          <h6> {item.card_title} </h6>                          
                        </div>
                      </div>

                      <div className="content">
                        <h3></h3>
                        <p> {item.card_content} </p>
                        <ul>
                          <li> {item.li_1} </li>
                          <li> {item.li_2} </li>
                          <li> {item.li_3} </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section> */}
        {/* ------------------------------ End Web Devlopment Card -------------------------- */}

      </div>
    </>
  );
}

