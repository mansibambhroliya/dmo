import React from 'react'
import Header from './Header'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Digital() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <Header />
      {/* ---------------digital marketing social Meadia Section1 start-------------- */}
      <section id='digital-marketing' data-aos="fade-up">
        <div className='container' >
          <div className="row justify-center my-5 ">
            <div className="col-md-6 col-12 i-col text-white text-md-start text-center align-center mt-4">
              <div className="single-box-mobaile ">
                <div className="single-box-mobaile">
                  <div className="mobaile-title">Social Media Marketing</div>
                  <div className="mobaile-text">Social Media Marketing is way more than uploading images, using hashtags, etc. It involves a series of well-analyzed steps to help your business grow. We at Kyros digital marketing have bifurcated this process in series of steps:</div>
                  <div className="mobaile-text">
                    <div className="d-flex icon-flex">
                      <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                      <p>First, we research the market for the product/service requirement.</p>
                    </div>
                    <div className="d-flex icon-flex">
                      <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                      <p>Moreover we with the help of our experienced content writer and graphic designer, we design a viral social media post and caption for the same, which helps us reach more potential customers.</p>
                    </div>
                    <div className="d-flex icon-flex">
                      <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                      <p>Finally, we always prepare a real-time audit report of the SMM campaign to showcase the best result and improve even more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 i-col2 justify-center ">
              <div className="img-box-mobaile img-box-mobaile1 img-social " >
                <img src={require('../images/social__1_-removebg-preview.png')} alt="" className='' />
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* ---------------digital marketing social Meadia Section1 End-------------- */}

      {/* --------------------------Email Marketing start----------------- */}
      <div id="email-marketing" data-aos="fade-up">
        <div className="container" id='email'>
          <div className="row row-email row-same" data-aos="fade-up">
            <div className="col-md-6 col-sm-12 col-email">
              <div className="single-box-email-img">
                <div className="img-box-mobaile img-box-mobaile2">
                  <img src={require('../images/email.png')} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-email">
              <div className="single-box-email">
                <div className="mobaile-title text-md-start text-center">Our Email Marketing</div>
                <div className="mobaile-text">Our Email Marketing Service includes sending emails to our clients’ subscribers, engage and retain customers for them. We manage, give you control, and allow you to establish a direct relation with your customers</div>
                <p className="mobaile-text">Many people may consider Email marketing an old technique to grab new business opportunities. However, we ensure leading generation through this service and can guarantee ROI up to 40%. Hence, you will find us the best email marketing services provider to bring your business to the next level.</p>
              </div>
            </div>
            {/* <div className="col-12">
        <div className="mobaile-text">
        <div className="d-flex icon-flex">
          <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
          <p>A client meeting is arranged where our team of  understands the business goal directly from the client. Then our team also studies the competitor in the same domain.</p>
        </div>
        <div className="d-flex icon-flex">
          <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
          <p>Next, our team defines a target audience as the mail sent needs to be relevant.</p>
        </div>
        <div className="d-flex icon-flex">
          <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
          <p>Afterwards, we design the framework of the campaign and decide the promising techniques (Promotional mail, Informational mail, etc.) to ensure desired results.</p>
        </div>
        <div className="d-flex icon-flex">
          <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
          <p>Our competent and experienced content writers write effective and personalized mail samples to attract more customers.</p>
        </div>
        <div className="d-flex icon-flex">
          <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
          <p>Lastly, we establish A/B testing camping to evaluate whether the email marketing campaign is performing better.</p>
        </div>
        </div>
      </div> */}
          </div>
        </div>
      </div>
      {/* --------------------------Email Marketing End----------------- */}

      {/* ----------------------google ads start--------------------- */}
      <div id="digital-marketing" >
        <div className="container" id='google'>
          <div className="row row-mobaile row-same" data-aos="fade-up">
            <div className="col-md-6 col-sm-12 col  col-mobaile1 order-md-1  order-sm-2 order-xs-2">
              <div className="single-box-mobaile">
                <div className="mobaile-title">Google Ads</div>
                <div className="mobaile-text">Google Ads is a kind of paid advertising technique in which one can start an ad campaign by paying Google. So, we make sure that our customers’ money invested in Google Ads PPC should bring higher ROI.</div>
                <div className="mobaile-text">
                  <div className="d-flex icon-flex">
                    <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                    <p> At first, we understand the client’s niche and its subdomain (if there is any).</p>
                  </div>
                  <div className="d-flex icon-flex">
                    <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                    <p>Then we study the competitors who are already there so we can easily outrank them.</p>
                  </div>
                  <div className="d-flex icon-flex">
                    <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                    <p> After reviewing the market and competitors, we finalize the highly searched keywords and are low cost.</p>
                  </div>
                  <div className="d-flex icon-flex">
                    <img className='img-icon-done' src={require('../img/CHECK-BOX.png')} alt="" />
                    <p>As a final step, we add the call to action to generate more leads from the ad campaign.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col  col-mobaile-img1 order-md-2 order-sm-1 order-xs-1">
              <div
                className="img-box-mobaile img-box-mobaile1"
              >
                <img src={require('../images/google1.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------google ads end--------------------- */}

      {/* ------------------facebook ads start------------------- */}
      <div id="email-marketing" >
        <div className="container" id='facebook'>
          <div className="row row-email row-same" data-aos="fade-up">
            <div className="col-md-6 col-sm-12 col-email">
              <div className="single-box-email-img">
                <div className="img-box-mobaile img-box-mobaile2 img-facbook">
                  <img src={require('../images/google2.png')} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-email">
              <div className="single-box-email">
                <div className="mobaile-title">Facebook Marketing</div>
                <div className="mobaile-text">At Codeair Technologies, we develop innovative and noticeable Facebook ad campaigns for new startups, small, medium-sized, and established businesses. Further, this makes us the best Facebook marketing agency in Surat. At the inception of our company, we initiated a few Facebook ads that were very successful.</div>
                <p className="mobaile-text">The ads made our portfolio strong, and swiftly, we turned into a reliable digital marketing agency that can increase the ROI of any business by Facebook ads.</p>
                <p className="mobaile-text"> And for your Last Sake, We are the Creative Facebook Marketing Agency in India.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------facbook ads End------------------- */}


    </>
  )
}
