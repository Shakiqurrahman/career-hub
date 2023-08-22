import React from 'react';
import './Hero.css'
import { Link } from 'react-router-dom';
import heroImg from '/src/assets/All Images/hero-img.png'

const Hero = () => {
    return (
        <section className='hero container'>
            <div className="content">
                <h1 className='title'>One Step <br /> Closer To Your<br /><span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn'>
                    <Link>Get Started</Link>
                </button>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="Hero Image" />
            </div>
        </section>
    );
};

export default Hero;