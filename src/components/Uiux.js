import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";

export default function Uiux({ props }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <div id="services-uiux">
        {/* <div className="container ">
          <div className="row">
            <div className="col-12 main-title text-center">
            <div> <h2>{props.title}</h2></div> 
            </div>
          </div>
        </div> */}

        {/* ------------------section 1 start--------------- */}
        <div className="mobaile-services">
          <div className="container my-5">
            <div className="row row-mobaile" data-aos="fade-up">
              <div className="col-md-6 col-sm-12 col-mobaile col-mobaile1 order-md-1  order-sm-2 order-xs-2 align-center">
                <div className="single-box-mobaile">
                  <div className="services-title pb-2 text-sm-start text-center"><h1>UI/Ux <br />Designing</h1></div>
                  <div className="mobaile-text">{props.title1inner}</div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col col-mobaile-img col-mobaile-img1 order-md-2 order-sm-1 order-xs-1">
                <div
                  className="img-box-mobaile img-box-mobaile1"
                  style={{ width: [props.img1width] }}
                >
                  <img src={props.img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------sectin 1 End--------------*/}

        <div className="relative">
          <div className="icon1">
            <img src={props.icon1} alt="" />
          </div>
          <div id="center-section">
            <div className="container my-5">
              <div className="row row-center-section" >
                <div className="col-12" data-aos="fade-up">
                  <div className="mobaile-title  text-center ">About Ui/Ux Design</div>
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
        <section className="what-we-provide" id="ui-ux-provide">
          <div className='container'>
            <div className="row" data-aos="fade-up">
              <div className="col-md-6 col-12 align-center justify-center">
                <div style={{ width: [props.img2width] }} className="py-5">
                  <img src={props.img2} alt="" width='90%' />
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
        {/* ----------------section 2  end ---------------- */}

        {/* --------------------------------- Start Cards in UI/UX Page --------------- */}
        <section id="box-card">
          <div className="container" id="ui-ux-box" >
            <div className="row row-box-card" data-aos="fade-up">
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/2.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>UI Design</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      Our UI Designers transform dreams into best-in-class aesthetic designs that ensure users return by enhancing user interactions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/0.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>UX Design</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We shape user experiences that ensure a seamless user journey by making it simple, enjoyable, and worth time-spending activity.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/1.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Wireframing & Prototyping</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We paint a visual representation of the product with page structure, layout, functions, and Information.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/2.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Product Design</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We offer end-to-end product design services from concept to deployment and deliver clickable prototypes of your bespoke solution.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/0.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Design System</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      We provide comprehensive design system services encompassing everything from color to branding guidelines to maintain consistency and scalability throughout the product.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 col col-box-card">
                <div className="single-box-card">
                  <div className="inner-box-card">
                    <div className="icon-box-card">
                      <img src={require("../images/1.png")} alt="" />
                    </div>
                    <div className="inner-box-card-title">
                      <p>Brand Development</p>
                    </div>
                    <div className="inner-box-card-text mobaile-text">
                      With interactive brand design and brand strategy solutions, we help you create a strong brand and let you stand out from competitors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --------------------------------- End Cards in UI/UX Page   --------------- */}
      </div>
    </>
  );
}

