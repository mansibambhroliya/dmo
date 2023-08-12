import React from 'react'
import Header from './Header'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Thank() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); 
            window.location.reload();
             

        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
            <Header />
            <div className='thank-div'>
                <div className=''>
                    <h1 >Thank You!</h1>
                    <img src={require('../img/right.webp')} alt="" className='' /> <br />                  
                    
                    {/* <p>Thank you for connecting us.</p> */}
                    <Link to='/'>Click here for go back</Link>
                </div>
            </div>
            
        </>

    )
}
