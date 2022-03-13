import React from "react";
import Typical from 'react-typical'
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">     
            <a href="https://github.com/Waer1/Edvora-Task">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
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
                  <button className="btn primary-btn">
                      {""}
                      Hire Me
                      </button>
                      <a href="sample.pdf" download='sample.pdf'>
                      {/* <a href="sample.pdf" download='sample.pdf'> */}
                      <button className="btn highlighted-btn">Get Resume</button>
                      </a>
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
