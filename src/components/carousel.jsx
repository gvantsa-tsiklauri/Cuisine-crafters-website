import React from "react";
import car1 from "../assets/carousel-slide1.png";
import car2 from "../assets/carousel-slide2.png";
import car3 from "../assets/carousel-slide3.png";
import car4 from "../assets/carousel-slide4.png";
import { useEffect } from 'react';

import { gsap } from "gsap";

function Carousel() {
    useEffect(() => {
        gsap.from(".carousel", {
            opacity: 0,
        });
        gsap.to(".carousel", {
            delay: 1, // Using a delay of 0.5 seconds
            duration: 1,
            opacity: 1,
            ease: "expo.out",
        });
    }, []);
    
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide container-xxl p-0">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                    <img src={car1} className="d-block car-pic w-100 z-n1" alt="..." />
                    <div className="car-text-div">
                        <h2 className="carousel-title">Cuisine crafters!</h2>
                        <p className="carousel-text">Discover Your Inner Chef with us!</p>
                    </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img src={car2} className="d-block car-pic w-100 z-n1" alt="..." />
                        <div className="car-text-div">
                            <h2 className="carousel-title">Cuisine crafters!</h2>
                            <p className="carousel-text">Experience the Art of Cooking at Cuisine Crafters</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img src={car3} className="d-block car-pic w-100 z-n1" alt="..." />
                        <div className="car-text-div">
                            <h2 className="carousel-title">Cuisine crafters!</h2>
                            <p className="carousel-text">Where Flavors and Innovation Meet</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img src={car4} className="d-block car-pic w-100 z-n1" alt="..." />
                        <div className="car-text-div">
                            <h2 className="carousel-title">Cuisine crafters!</h2>
                            <p className="carousel-text">Turn Your Love for Cooking into a Profession at Cuisine Crafters.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="h-100 w-100">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    )
}

export default Carousel