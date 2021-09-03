import React from "react";
import profile from "../assets/images/profil.png";
import arrow_down from "../assets/images/arrow-down.png";

const Main = () => {
  return (
    <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-content-wraper wow fadeInUp" data-wow-delay="0s">
              <h1>Stéphane <span>Rathgeber</span></h1>
              <h5>Tech Lead Symfony</h5>
              <div className="profile-photo wow fadeInUp" data-wow-delay="0.1s">
                <img src={profile} alt="#" />
              </div>
              <div className="arrow-down wow fadeInUp" data-wow-delay="0.2s">
                <a href="#siuis-je">
                  <img src={arrow_down} alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
