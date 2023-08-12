import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";

export default function MobaileApp({ props }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <div id="services">
        {/* <div className="container ">
          <div className="row">
            <div className="col-12 main-title text-center">
            <div> <h2>{props.title}</h2></div> 
            </div>
          </div>
        </div> */}

        {/* ------------------------------ Start Mobile App Development ----------------------------- */}
        <section id='mobaile-services'>
          <div className='container'>
            <div className="row justify-center my-4" data-aos="fade-up">
              <div className="col-md-6 col-12 i-col text-white text-md-start text-center align-center">
                <div className="single-box-mobaile ">
                  <div className="services-title mb-3"><h1>Mobile App <br />Development</h1></div>
                  <div className="mobaile-text">{props.title1inner}</div>
                </div>
              </div>
              <div className="col-md-6 col-12 i-col2">
                <div className="justify-center mb-4" style={{ width: [props.img1width] }}>
                  <img src={props.img1} alt="" className="" width='90%' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------ End Mobile App Development ----------------------------- */}

        {/* ------------------------------ Start About Mobile App Development ----------------------------- */}
        <div className="relative">
          <div className="icon1">
            <img src={props.icon1} alt="" />
          </div>
          <div id="center-section">
            <div className="container">
              <div className="row my-5">
                <div className="col-12" data-aos="fade-up">
                  <div>
                    <div className="mobaile-title">About Mobile App Devlopment</div>
                    <div className="text-mobile-center">{props.center}</div>
                  </div>
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
        {/* ------------------------------ End About Mobile App Development ----------------------------- */}

        {/* ------------------------------ Start What we Provide ----------------------------- */}
        <section className="what-we-provide">
          <div className='container'>
            <div className="row" data-aos="fade-up">
              <div className="col-md-6 col-12 align-center">
                <div style={{ width: [props.img2width] }} className="justify-center mb-4">
                  <img src={props.img2} alt="" width='70%' />
                </div>
              </div>
              <div className="col-md-6 col-12 align-center text-white text-md-start text-center">
                <div className="single-box-mobaile w-100">
                  <div className="mobaile-title">{props.title2}</div>
                  <div className="mobaile-text mb-2">{props.title2inner}</div>
                  <div className="mobaile-text">{props.title2inner2}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------------ End What we Provide ----------------------------- */}

        {/* ----------------------------New section Start--------------- */}
        <section id="box-card">
          <div className="container">
            <div className="row row-box-card" data-aos="fade-up">
              <div className="col-lg-4 col-md-6 col-sm-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/2.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Flutter App Development </p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      Our Flutter app developers will help you build platform-independent digital experiences and services are devised to help you create a multi-platform existence. Right from finding the best product-market fit to seamlessly deploying your application across a number of platforms, our flutter developer can help you design, develop, test, and launch full-fledged Flutter apps.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/1.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Android App Development</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We are an Android mobile app development company in India
                      that ensures scalability and has extensive knowledge of
                      all aspects of Android app development. Android is hailed
                      as the best platform for startups and small businesses.
                      Our Android development services ensure that it can help
                      both established businesses and small businesses.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/0.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>iOS Apps Development </p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We have a talented pool of experts ios mobile app
                      developers in india who specialize in iphone app
                      development. We've developed dozens of apps for various
                      Apple devices. We design iOS apps for all Apple devices,
                      including smartphones, ipads and apple TV.
                      Codeair Technologies is the perfect partner you need to turn your
                      company idea into a working iOS application.
                    </div>
                    {/* <div className="mobaile-text">
                      Moreover, we design a beautiful interface & seamless user
                      experience, to give high-end coding, or to provide
                      full-cycle iOS development services. We've developed
                      various iOS apps for a variety of businesses and niches,
                      including healthcare, energy, photography, sport,
                      education, and travel, creating a robust history of our
                      portfolio in app development services.
                    </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* ----------------------------New section End--------------- */}


      </div>
    </>
  );
}
