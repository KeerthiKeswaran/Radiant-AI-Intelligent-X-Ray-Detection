import React from 'react'
import '../Styles/Home.css';
import NavBarBG from '../Sources/NavBarBG1.mp4';
import { useState, useEffect } from 'react';
import { BsStars } from "react-icons/bs";
import Features from './Features';
import Working from './Working';
import { Link } from 'react-scroll';
import {Link as RouteLink} from 'react-router-dom'
const Home = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 1000);
    }, []);

    return (
        <div>
            <div className='HomePage' id='home'>
                <video autoPlay muted loop className='NavBackground'>
                    <source src={NavBarBG} type="video/mp4"></source>
                </video>
                <div className="video-fade"></div>
                <div className='NavBar'>
                    <h1>Radiant-AI</h1>
                    <ul>
                        <li><Link
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Home
                        </Link></li>
                        <li><Link
                            to="features"
                            spy={true}
                            smooth={true}
                            offset={90}
                            duration={500}
                        >
                            Categories
                        </Link></li>
                        <li><Link
                            to="working"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={600}
                        >
                            How it works?
                        </Link></li>
                        <li><Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={900}>
                            About us
                        </Link></li>
                    </ul>
                </div>

                <div className='HeroContent'>
                    <h1 className={showText ? 'fadeIn' : ''}>Welcome to Radiant-AI</h1>
                    <p className={showText ? 'typing' : ''}>
                        Where Precision and Innovation Unite for Superior Medical Diagnostics <BsStars style={{ color: "antiquewhite" }} />
                    </p>
                </div>
                <RouteLink className='routeLink' to='/Predict'>
                    <div className='getStarted'>
                        <h3 className='started'>Get Started</h3>
                    </div>
                </RouteLink>
            </div>
            <section id='features'>
                <Features id='Features' />
            </section>
            <section id='working'>
                <Working id='Working' />
            </section>

        </div>
    )
}

export default Home