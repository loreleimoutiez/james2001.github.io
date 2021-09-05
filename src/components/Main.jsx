import React from "react";
import profile from "../assets/images/profil.png";
import profile2 from "../assets/images/profil-2.png";
import arrow_down from "../assets/images/curly-arrow.png";

const imagesPath = {
  smile: profile,
  smile2: profile2
}

class Main extends React.Component {

  state = {
    smile: false
  }
  toggleImage = () => {
    this.setState(state => ({ smile: !state.smile }))
  }

  getImageName = () => this.state.smile ? 'smile' : 'smile2'

  render () {
    const imageName = this.getImageName();
    return (
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-content-wraper wow animate__animated animate__zoomInUp" data-wow-delay="0s">
                <h1>Stéphane <span>Rathgeber</span></h1>
                <h5>Tech Lead Symfony</h5>
                <div className="profile-photo wow animate__animated animate__zoomInUp" data-wow-delay="0.1s">
                  <img src={imagesPath[imageName]} alt="me" onClick={this.toggleImage } />
                </div>
                <div className="arrow-down wow animate__animated animate__zoomInUp" data-wow-delay="0.2s">
                  <a href="#qui-suis-je">
                    <img src={arrow_down} alt="down" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
