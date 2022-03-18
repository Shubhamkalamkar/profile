import "./AboutMe.css";

import React from "react";

export default function AboutMe() {
  return (
    <div className="body">
      <div className="container">
        <div className="leftSide">
          <div className="profileTxt">
            <div className="about-Me-profile-picture">
              <div className="about-Me-Profile-Picture-Background">
                {/* <img src="profile.jpg" alt='Profile img'/> */}
              </div>
            </div>
            <h2>
              Shubham Kalamkar
              <br />
              <span>Web Devloper</span>
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text"> +919552530101</span>
              </li>
              <li>
                <span className="icon">
                  <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                </span>
                <span className="text"> Shubhamkalamkar0101@gmail.com</span>
              </li>
              <li>
                <span className="icon">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                </span>
                <span className="text">
                  {" "}
                  https://shubhamkalamkar.github.io/profile/
                </span>
              </li>
              <li>
                <span className="icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="text"> Ghargaon Ahmednager Maharashtra</span>
              </li>
            </ul>
          </div>
          <div className="contactInfo education">
            <h3 className="title">education</h3>
            <ul>
              <li>
                <h6>2018 - 2023</h6>
                <h4>BE E&TC</h4>
                <h4>SPPU</h4>
              </li>
              <li>
                <h6>2016 - 2018</h6>
                <h4>HSC</h4>
                <h4>MAHARASHTRA STATE BOARD</h4>
              </li>
              <li>
                <h6>2016</h6>
                <h4>SSC</h4>
                <h4>MAHARASHTRA STATE BOARD</h4>
              </li>
            </ul>
          </div>

          <div className="contactInfo language">
            <h3 className="title">Languages</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="percent">
                  <div style={{ width: 200 }}></div>
                </span>
              </li>
              <li>
                <span className="text">Marathi</span>
                <span className="percent">
                  <div style={{ width: 350 }}></div>
                </span>
              </li>
              <li>
                <span className="text">Hindi</span>
                <span className="percent">
                  <div style={{ width: 300 }}></div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum veritatis dolorum saepe sit nobis beatae ad commodi
              quaerat est illo, perferendis et at non a, mollitia id consequatur
              voluptas architecto iure dicta. Labore cupiditate officiis
              eligendi delectus odit laudantium aut similique magni, laborum
              accusantium.
            </p>
          </div>
          <div className="about skills">
            <h2 className="title2">Professional Skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent">
                  <div style={{width:400}}></div>
              </div>
            </div>
            <div className="box">
              <h4>CSS</h4>
              <div className="percent">
              <div style={{width:300}}></div>
              </div>
            </div>
            <div className="box">
              <h4>JAVASCRIPT</h4>
              <div className="percent">
              <div style={{width:300}}></div>
              </div>
            </div>
            <div className="box">
              <h4>C++</h4>
              <div className="percent">
              <div style={{width:350}}></div>
              </div>
            </div>
            <div className="box">
              <h4>JAVA</h4>
              <div className="percent">
              <div style={{width:350}}></div>
              </div>
            </div>
            <div className="box">
              <h4>ANDROID</h4>
              <div className="percent">
              <div style={{width:300}}></div>
              </div>
          </div>
          </div>

          <div className="about interest">
              <h2 className="title2">Interest</h2>
              <ul>
                  <li>Reading</li>
              </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
