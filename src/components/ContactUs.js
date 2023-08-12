import React from 'react';
import { useRef, useState, prevState } from 'react';
import emailjs from '@emailjs/browser';
// import { useForm } from "react-hook-form";
import { BsFillTelephoneFill, BsTelephoneFill } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';
import { AiFillSkype } from 'react-icons/ai';
import { MdOutlineMailOutline, MdLocationOn, MdEmail } from 'react-icons/md';
import { Link, redirect } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef(); // send Email
  const navigate = useNavigate(); // redirect to /home

  const sendMail = (data) => {
    emailjs.sendForm('service_h4h689h', 'template_x9m39vi', form.current, '4ycg7NDPP1DT499TG')
      .then((result) => {
        console.log(result.text);
        console.log("message was send");
        toast.success('successful')

      }, (error) => {
        console.log(error.text);
      });
    // You can process the form data here, for example, send it to a server
    console.log(data);
    navigate('/thank');
    // toast.success('Successful');
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      {/* -------------------------Contact Us Start------------------------ */}
      <section id='contact' className='pt-5 mt-3'>
        <div className="container">
          <div className="row row-contact" data-aos="fade-up">
            <div className="col-md-6 col-sm-12 col col-contact my-3">
              <div className="contact-first-side">
                <div className="contact-title mobaile-title"><p>Contact Us</p></div>
                <div className="contact-form">

                  <form ref={form} onSubmit={handleSubmit(sendMail)}>
                    <div className="single-line single-line1">
                      <div className="first-box">
                        <label className='form-title'>FULL NAME</label>
                        <input type="text" name='username' placeholder='Name' id='username'
                          {...register('username', { required: 'Username is required' })}
                        />
                        {errors.username && <p className='error m-0'>{errors.username.message}</p>}
                      </div>
                      <div className="second-box">
                        <label className='form-title'>EMAIL ADDRESS</label>
                        <input type="email" name='email' placeholder='Email'
                          id="email"
                          {...register('email', {
                            required: 'Email is required *',
                            pattern: {
                              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                              message: 'Invalid email address ',
                            },
                          })}
                        />
                        {errors.email && <p className='error m-0'>{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="single-line">
                      <div className="single-box">
                        <label className='form-title'>SUBJECT</label>
                        <input type="text" name='user_phone' placeholder='Subject'
                          id="subject"
                          {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && <p className="error m-0">{errors.subject.message}</p>}
                      </div>
                    </div>
                    <div className="single-line">
                      <div className="single-box msg-box">
                        <label className='form-title'>MESSAGE</label>
                        <textarea id="msg" cols="5" rows="5" name='msg' placeholder='Leave a Message for us.'
                          {...register('msg', { required: 'Leave a message for us.' })}
                        ></textarea>
                        {errors.msg && <p className="error m-0">{errors.msg.message}</p>}
                      </div>
                    </div>
                    <div className="form-btn same-inpute">
                      <input className="btn-design" value='Submit' type="submit" />
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-contact mt-3 contact-iframe">
              <iframe className=" map-size m-auto d-block w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.763290868119!2d72.8642184!3d21.2341951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4617ccbaa3%3A0x3b2f324121d2074!2sCodeAir%20Technologies!5e0!3m2!1sen!2sin!4v1691057265239!5m2!1sen!2sin" max-width="800" display='block' height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>

          <div className="row row-contact-icon text-wrap my-5" data-aos="fade-up">
            <div className="col-lg-3 col-md-3 col-sm-6 col-contact-icon mb-3">
              <Link>
                <div className="main-contact-icon">
                  <div className="single-icon"><MdLocationOn></MdLocationOn></div>
                  <div className="contact-icon-text">219,Angel Square,<br />VIP Circle, Uttran, Surat</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-contact-icon">
              <Link>
                <div className="main-contact-icon">
                  <div className="single-icon"><BsTelephoneFill></BsTelephoneFill></div>
                  <div className="contact-icon-text">+91 96240 85885</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-contact-icon">
              <Link to=''>
                <div className="main-contact-icon">
                  <div className="single-icon"><MdEmail></MdEmail></div>
                  <div className="contact-icon-text">contact@codeairtech.com</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-contact-icon wrap-text">
              <Link target='_blank' to="https://join.skype.com/invite/h9KXTd6qsHgs">
                <div className="main-contact-icon w-100" >
                  <div className="single-icon"><AiFillSkype></AiFillSkype></div>
                  <div className="contact-icon-text">Codeair Technologies</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------Contact Us End------------------------ */}

    </>
  );
}
