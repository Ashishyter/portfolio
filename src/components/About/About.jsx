import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import "./About.css";
import ashish from "../../assets/ashish.png";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1>About Me</h1>
      <div className="about">
        <div className="avatar">
          <img src={ashish} alt="ashish" className="photo" />
        </div>
        <div className="about-text">
          <div className="para">
            <p>
              I am an experienced Front-End developer with a two years of
              professional expertise in the field. Throughout my carrier, i have developed more than
              ten projects for the prestigious organisations, contributing to their success & growth.
            </p>
          </div>
          <div className="detail">
            <pre>Name       :    Ashish Vishwakarma</pre>
            <pre>Email        :    Ashishyter@gmail.com</pre>
            <pre>Address    :    Uttar Pradesh, India</pre>
          </div>
          <div className="social">
            <p>Follow Me</p>
            <a href="">{<FaFacebookF />}</a>
            <a href="">{<FaWhatsapp />}</a>
            <a href="">{<FaInstagram />}</a>
            <a href="">{<FaLinkedinIn />}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
