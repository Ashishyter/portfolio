import React from "react";
import { IoIosStar } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import "./Testimonial.css";
import ritesh from "../../assets/ritesh.png";
import akash from '../../assets/akash.png'
import pratik from '../../assets/pratik.png'

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h1>Testimonial</h1>
      <div className="testimonial-cards">
        <div className="cards">
          <div className="stars">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p className="para">
            <sup>
              <ImQuotesLeft />
            </sup>
            Get this guys on your team before one of your competitors does. I
            have never seen quality works like this before.  
          </p>
          <div className="image">
            <img src={ritesh} alt="" />
            <div className="name">
              <h3>Ritesh Maurya</h3>
              <p>Junior Developer</p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="stars">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p className="para">
            <sup>
              <ImQuotesLeft />
            </sup>
            Get this guys on your team before one of your competitors does. I
            have never seen quality works like this before.  
          </p>
          <div className="image">
            <img src={akash} alt="" />
            <div className="name">
              <h3>Akash Pandey</h3>
              <p>CEO NanoSoft</p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="stars">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p className="para">
            <sup>
              <ImQuotesLeft />
            </sup>
            Get this guys on your team before one of your competitors does. I
            have never seen quality works like this before.  
          </p>
          <div className="image">
            <img src={pratik} alt="" />
            <div className="name">
              <h3>Pratik Shukla</h3>
              <p>Senior Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dots">
        <span ></span>
        <span className="active"></span>
        <span></span>
      </div>
    </div>
  );
};

export default Testimonial;
