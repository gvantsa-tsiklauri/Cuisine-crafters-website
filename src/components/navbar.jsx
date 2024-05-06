import React from 'react';
import logo from '../assets/horisontal-logo.svg';
import '../index.css';
import { useEffect } from 'react';

import { gsap } from "gsap";


function Navbar() {
    useEffect(() => {
        gsap.from(".navigation", {
            opacity: 0.3,
            y:'-50%',

          });
        gsap.to(".navigation", {
            duration: 1,
            opacity: 1,
            y: '0%',
            ease: "bounce.out"
        })
    }, []);


    return(
        <>
            <nav className="navbar navbar-expand-lg p-0 navigation">
                <div className="container-md">
                    <a className="navbar-brand" href="#"> <img src={logo} alt="rato ar mushaobsss" /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3 py-2">
                                <a className="nav-link " aria-current="page">Home</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <a to="/about" className="nav-link">About us</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <a to="/about" className="nav-link">Our courses</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <a to="/about" className="nav-link">Coaches</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <a to="/about" className="nav-link">Reviews</a>
                            </li>
                            <li className="nav-item px-3 py-2">
                                <button className='btn button-primary'> Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar