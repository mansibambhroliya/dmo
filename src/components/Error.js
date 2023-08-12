import React from 'react'
import { Link } from "react-router-dom";


export default function Error() {
    return (
        <>
            <section id='error-page' className='container-fluid'>
                <div className="row text-center">
                    <div className="col-12">
                        <h1>404 Error</h1>
                    </div>
                    <div className="col-12 fs-3 mt-3">
                        <span>Ufff! You're lost.</span>
                    </div>
                    <div className="col-12 mt-4">
                        <p>
                            The page you are looking for does not exist. How you got here is a mystery. <br /> But you can click the button below to go back to the homepage.
                        </p>
                    </div>
                    <div className="col-12 mt-4">
                        <Link to="/">  <button className='btn-theme px-4'> Home </button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
