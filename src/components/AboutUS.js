import React from 'react'
import Header from './Header'
import { MdColorLens } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPalette, faCode, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUS() {

  const Why = [
    {
      
      img: require('../img/a1.png'),
      why_title: "We go beyond",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    },
    {
      img: require('../img/a4.png'),
      why_title: "We’re hard Workers",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    },

    {
      img: require('../img/a2.png'),
      why_title: "We deliver Value",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    },
    {
      img: require('../img/a5.png'),
      why_title: "We go beyond",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    },
    {
      img: require('../img/a3.png'),
      why_title: "We do for all",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    },
    {
      img: require('../img/a6.png'),
      why_title: "We love our clients",
      why_detail: "We do so much more than just development. We go through each and every small details and requtrements to  make apps perfect. "
    }
  ]
  const Process = [
    {
      icon: faMagnifyingGlass,
      backNumber: '01',
      title: "Ideation",
      deatil: "We listen to your ideas and identify your business objectives. This phase is crucial as it helps us in setting goals that match your objectives."
    },
    {
      icon: faCompactDisc,
      backNumber: '02',
      title: "Defining",
      deatil: "After understanding your intentions, we create a detailed SOW. Project requirement, cost-analysis and goal-setting are done with your suggestions."
    },
    {
      icon: faPalette,
      backNumber: '03',
      title: "Designing",
      deatil: "A dedicated team will be assigned for your project who will create an action plan, with a clear definition of each component on the wireframe."
    },
    {
      icon: faCode,
      backNumber: '04',
      title: "Development",
      deatil: "By keeping constant communication, your project will be built as per the finalized design under the defined costs and your supervision."
    }
  ]
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />

      {/* ------------------------------ Start Welcome Section ------------------------------ */}
      <section id='wecome-section' className='position-relative' data-aos="fade-up">
        <div className="container">
          <div className='welcome-content'>
            <h1>Welcome To Codeair </h1>
            <h3 className='mb-4'>We Provide IT Solutions That Help You Success</h3>
            <p>
              Today, the IT industry is fragmented customers are more competitive than ever and today’s businesses want more for each service that they look at. Codeair Technologies is a focused partner with the ability to absorb challenges of each of its clients, our passion, expertise, commitment to perfection and the right size of the company makes us take every new challenge and constantly transform those challenges into new opportunities of business.</p>
            <p>
              Codeair Technologies is a mid-sized staffing and technology services company managed by a team of dedicated and talented professionals with global IT experience. We provide specialized IT services & solutions and provide the finest talent to meet the customer’s staffing requirements.</p>
            <p>
              Our customer-centric model provides focus, commitment, and a dedicated team to help our customers achieve their business objectives. We offer an enriching experience to each of its clients in diverse industries.</p>

            <p>We are your partner in Enabling Enterprise Excellence </p>
          </div>
        </div>
        <div className='group-circle'>
          <img src={require('../img/_Group_.png')} alt="" />
        </div>
      </section>
      {/* ------------------------------ End Welcome Section ------------------------------ */}

      {/* --------------------------- Start Why CodeAir?--------------------------------*/}
      <section id='why-CA-section' data-aos="fade-up">
        <div className="container">
          <div className='section-title ms-2 mb-4'>
            <h1>Why Codeair?</h1>
          </div>
          <div className="row row-4" >
            {
              Why.map((item) => (
                <div className="col1" data-aos="fade-up">
                  <div className='why-content'>
                    <div className='why-img align-center justify-center'>
                      <img src={item.img} alt="" />
                    </div>
                    <div className='sub-detail'>
                      <h6> {item.why_title} </h6>
                      <p> {item.why_detail} </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='crcl-img'>
          <img src={require('../img/crcl.png')} alt="" />
        </div>
      </section>
      {/* --------------------------- End Why CodeAir?--------------------------------*/}


      {/* --------------------------- Start OUR PROCESS--------------------------------*/}
      <section id='our-progress' data-aos="fade-up">
        <div className="container">
          <div className='section-title text-center ms-2 mb-4'>
            <h1>our process</h1>
            <h3>How We Work</h3>

          </div>
          <div className="row">
            {
              Process.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 progress-div" data-aos="fade-up">
                  <div className='progress-content'>
                    <span>
                      <FontAwesomeIcon icon={item.icon} />
                      <p className='backNumber'> {item.backNumber} </p>
                    </span>
                    <div className='mt-4'>
                      <h4>{item.title}</h4>
                      <p>{item.deatil}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className='double-squre'>
          <img src={require('../img/white-square.png')} alt="" />
        </div>
      </section>
      {/* --------------------------- End OUR PROCESS--------------------------------*/}

      {/* --------------------------- Start Work About--------------------------------*/}
      <section id="work-about-sec" data-aos="fade-up">
        <div className="container ">
          <div className="work-about-item">
            <div className="back-item"> </div>

            <div className="row work-sub-div align-center">

              <div className="col-lg-6 col-12 info ">
                <h5>WORKS ABOUT</h5>
                <h1>Trusted by 100+ <br />Happy Customers</h1>
                <p>
                  Being the software development company in India and the innovative leaders of this era, VPN Infotech takes pride in building high-end web and mobile development solutions for clients dotted across the world. We are a thriving community who yearns for perfectionism and professionalism. Our team of hardcore technology lovers are our greatest assets and we are immensely proud to have them.
                </p>
                <ul>
                  <li><img src={require('../img/CHECK-BOX.png')} alt="" />98% Client satisfation</li>
                  <li><img src={require('../img/CHECK-BOX.png')} alt="" />World Class Work</li>
                </ul>
              </div>
              <div className="col-lg-6 col-12 about-work-img position-relative  ">
                <div className='sub-work-img ms-lg-3 '><img src={require('../img/happy.png')} alt="" width='100%' className='' /></div>
                {/* <div className='completed-project'>
                  <h5>1000+</h5>
                  <span>Completed Projects</span>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --------------------------- End Work About--------------------------------*/}

      {/* --------------------------- Start Industries We Serve--------------------------------*/}
      <section id='industries-section' data-aos="fade-up">
        <div className="container">
          <div className='section-title text-center ms-2 mb-4'>
            <h1>Industries We Serve</h1>
          </div>
          <div className="row row-5 industies-img">

            <div className="col1 justify-center">
              <div>
                <img src={require('../img/Frame1.png')} alt="" srcset="" />
                <img src={require('../img/Frame2.png')} alt="" srcset="" />
                <img src={require('../img/Frame3.png')} alt="" srcset="" />
                <img src={require('../img/Frame4.png')} alt="" srcset="" />
              </div>
            </div>

            <div className="col2 justify-center align-center">
              <div>
                <img src={require('../img/Frame5.png')} alt="" srcset="" />
                <img src={require('../img/Frame6.png')} alt="" srcset="" />
                <img src={require('../img/Frame7.png')} alt="" srcset="" />
              </div>
            </div>

            <div className="col3 justify-center ">
              <div>
                <img src={require('../img/Frame8.png')} alt="" srcset="" />
                <img src={require('../img/Frame9.png')} alt="" srcset="" />
                <img src={require('../img/Frame10.png')} alt="" srcset="" />
                <img src={require('../img/Frame11.png')} alt="" srcset="" />
              </div>
            </div>

            <div className="col4 justify-center align-center">
              <div>
                <img src={require('../img/Frame12.png')} alt="" srcset="" />
                <img src={require('../img/Frame13.png')} alt="" srcset="" />
                <img src={require('../img/Frame14.png')} alt="" srcset="" />
              </div>
            </div>

          </div>
        </div>
      </section >
      {/* --------------------------- End Industries We Serve--------------------------------*/}


    </>
  )
}
