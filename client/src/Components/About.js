import React from 'react';
import '../Styles/About.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll'

const About = () => {
  const currentYear= new Date().getFullYear();
  return (
    <div className="about-section" id='about'>
      <div className="footer" id="contact">
        <div className="creator">
          <p>A product by</p>
          <h3>KeerthiKeswaran</h3>
          <p>Hope you find it useful!</p>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <div className="social-link">
            <FaFacebook className="icon" />
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="social-link">
            <FaTwitter className="icon" />
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="social-link">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/keerthikeswaran-k-s/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="social-link">
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/keerthioffl_2329" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="navigation">
          <h3>Go To</h3>
          <p><Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link></p>
          <p><Link
            to="features"
            spy={true}
            smooth={true}
            offset={90}
            duration={500}
          >
            Categories
          </Link></p>
          <p><Link
            to="working"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            How it works?
          </Link></p>
          <p><Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={900}>
            About us
          </Link></p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p><a href="mailto:keshwarankeerthi@gmail.com">radiantaisupport@gmail.com</a></p>
        </div>
        <p id="copyright">©{currentYear} Radiant-AI.</p>
      </div>
    </div>
  );
};

export default About;
