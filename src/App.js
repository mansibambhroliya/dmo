import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import css from './css/style2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Mobaile from './components/MobileApp';
import MediaQuery from './css/MediaQuery.css';
import MediaQuery2 from './css/mediaquery2.css';
import Style from './css/Style.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GotoUp from './components/GotoUp';
import { useCallback } from "react";
// import { loadFull } from "tsparticles";
import { useLocation } from "react-router-dom";
import GetStartedBtn from './components/GetStartedBtn';
import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Thank from './components/Thank';
import Error from './components/Error';

function App() {

  const [loading, setLoaging] = useState(false);

  useEffect(() => {
    setLoaging(true);
    setTimeout(() => {
      setLoaging(false);
    })
  }, 13000)
  const mobile =
  {
    title: 'Mobile App Development',
    title1: 'Mobile App Development',
    img1: [require("./images/mobile-removebg-preview.png")],
    // title1inner: 'Mobile application development is one of the most exciting and growing fields in the tech industry today. With so many people using mobile devices to access the internet, there’s never been a better time to develop a mobile app.',
    title1inner: 'Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles , implementing backend services such as data access with an API, and testing the application on target devices.',
    center: 'If you’re looking for a way to increase your business’ reach, consider developing a mobile application. There’s a growing trend of people using mobile apps to access information and services, and businesses that don’t have mobile applications are at a disadvantage. Not only that, but mobile apps are a great way to keep customers engaged and attached to your business.',
    title2: 'What We Provides',
    img2: [require("./images/mobile2.png")],
    title2inner: 'There are a variety of different mobile app development platforms to choose from, and each has its own strengths and weaknesses. For example, iOS apps are usually more user-friendly and sophisticated than Android apps. However, Android apps are often more versatile and can be used to create applications that run on a wider range of devices, including smart TVs and vehicles.',
    title2inner2: ' Regardless of which platform you choose, we’ll be able to help you choose the right platform and develop your app to meet your specific needs. If you follow our tips, you’ll have a successful business.',
    icon1: [require('./images/squre.png')],
    icon2: [require('./images/line.png')],
    // img1width:'400px',
    // img2width:'400px',
    b: '30px'
  }
  const website =
  {
    title: 'Website Development',
    title1: 'Website Development ',
    img1: [require("./images/website1.png")],
    title1inner: 'Web application development is a growing industry, and there are a number of reasons for that. First of all, it’s a great way to create customized and interactive websites.CODEAIR Infotech is a top website design and website development company in Surat, India & USA delivering the best web development services to craft bespoke websites, web applications, web-tools, etc.',
    center: 'For starters, custom web applications offer a unique way to improve your business. By creating a custom web application, you can increase efficiency and streamline your operations. You can also use a web application to build a CRM or e-commerce platform. This way, you can manage your customers and sales more effectively. ',
    title2: 'What We Provides',
    img2: [require('./images/website2.png')],
    title2inner: 'Web application development is a growing industry, and there are a number of reasons for that. First of all, it’s a great way to create customized and interactive websites. Not only that, but web application development is also great for CRM (customer relationship management), E-commerce, and ERP (enterprise resource planning) applications. With web application development, you can create a customized website that offers a unique service.',
    title2inner2: ' Plus, with the right software, you can easily create and manage your customer relationships. In addition, web application development is also a great way to create a strong online presence. By creating a custom website, you can build a strong online presence and attract more customers. So if you’re looking for a way to improve your business, web application development is definitely the way to go.',
    icon1: [require('./images/icon3.png')],
    icon2: [require('./images/icon4.png')],
    iconwdth: '50px',
    img1width: '390px',
    img2width: '350px',
    b: '30px'
  }
  const uiux =
  {
    title: 'UI/UX Designing',
    title1: 'UI/UX Designing',
    img1: [require("./images/uiux1.png")],
    title1inner: 'UI/UX designers are responsible for creating the look and feel of a website or application, and they use a variety of software programs to do so. Some of the most popular UI/UX programs include Figma, Adobe XD, Adobe Illustrator, and Photoshop.',
    center: 'Whether you’re looking for a designer to create a new user interface or improve existing ones, we have a talented professional in-house who can help. One of the most popular tools for UI/UX designers are Figma and Adobe XD. This program is versatile and user-friendly, making it perfect for creating high-quality user interfaces and user experience designs. Additionally, Vector Image is another powerful tool that can be used for UI/UX design.',
    title2: 'What We Provides',
    img2: [require('./images/uiux2.png')],
    title2inner: 'UI/UX is a field that’s growing more and more in popularity, and for good reason. It’s an important part of any web or mobile application, and it can make a big difference in how users feel about your site or app.',
    title2inner2: 'Another great tool for UI/UX design is Figma. It’s a web-based design platform that lets you create user interfaces and user experience designs in a drag-and-drop format. It also has built-in support for prototyping and testing, so you can quickly see how your designs look in different scenarios.',
    icon1: [require('./images/icon5.png')],
    icon2: [require('./images/icon6.png')],
    icon2x: [require('./images/circle.png')],
    ic: '80px',
    img1width: '500px',
    img2width: '500px',
    b: '-50px',
    b2: '-100px'
  }


const Home = React.lazy(() => import('./components/Home'));
const AboutUS = React.lazy(() => import('./components/AboutUS'));
const ContactUs = React.lazy(() => import('./components/ContactUs'));
// const ContactUs = React.lazy( () => {
//   return new Promise(resolve => setTimeout(resolve, 1 * 1000)).then(
//     () =>
//       Math.floor(Math.random() * 10) >= 4
//     ? import('./components/ContactUs') 
//     : Promise.reject(new Error())  
//     );
// })
const Portfolio = React.lazy(() => import('./components/Portfolio'))
const MobileApp = React.lazy(() => import('./components/MobileApp'))
const Website = React.lazy(() => import('./components/Website'))
const Uiux = React.lazy(() => import('./components/Uiux'))
const Digital = React.lazy(() => import('./components/Digital'))

// const particlesInit = useCallback(async (engine) => {
//   await loadFull(engine);
// }, []);

const particlesLoaded = useCallback(async (container) => {
  await console.log(container);
}, []);
const { pathname } = useLocation();

// Automatically scrolls to top whenever pathname changes
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

return (

  <>
    <div className='theme-black'>
      <Suspense fallback={
        <div class="loader">
          <div class="loader-inner">
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
          </div>
        </div>
      }>
        <div>
          <GotoUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUS />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/mobile-app-development" element={<MobileApp props={mobile} />} />
            <Route path="/website-development" element={<Website props={website} />} />
            <Route path="/uiux" element={<Uiux props={uiux} />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/thank" element={<Thank />} />
            <Route path="*" element={ <Error /> } />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </Suspense>
    </div>
  </>
);
}

export default App;
