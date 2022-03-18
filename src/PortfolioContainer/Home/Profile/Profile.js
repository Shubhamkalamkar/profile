import React from "react";
import Typical from 'react-typical'
import './Profile.css';
import {Link} from 'react-router-dom'
export default function Profile() {
  return (
    
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">     
            <a href="https://www.facebook.com/shubhamkalamkar0101/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="mailto:shubhamkalamkar0101@gmail.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/shubham__kalamkar/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://youtube.com/channel/UCk66OfM16gAJ70dKbSEms3w">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://www.twitter.com/kalamkar0101/">
              <i className="fa fa-twitter"></i>
            </a>
                  </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlightwd-text">Shubham</span> </span>
          </div>
          <div className="profile-details-role">
              <span className="primary-text">
                  {""}
                  <h1>
                      {""}
                      <Typical
                      loop={Infinity}
                      steps={[
                          "React Devloper",
                          1000,
                          "Web Devloper",
                          1000,
                          "Android Devloper",
                          1000,
                          "Cross Platform",
                          1000,
                      ]}
                      />
                  </h1>
                  <span className="profile-role-tagline">
                      buiding application with frontend with react
                      </span>
                  </span>
              </div>
              <div className="profile-options">
                  <Link to="/contact"><button className="btn primary-btn">
                      {""}
                      Contact Me
                      </button>
                      </Link>
                      {/* <a href="sample.pdf" download='sample.pdf'> */}
                      {/* <a href="sample.pdf" download='sample.pdf'> */}
                      <Link to="/about"><button className="btn highlighted-btn">About Me</button>
                      </Link>
                      {/* </a> */}
                  </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">
                
                </div>
            </div>
      </div>
    </div>
  );
}
