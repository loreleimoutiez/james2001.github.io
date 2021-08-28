import React from "react";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-wraper">
              <div className="copyright wow fadeInUp" data-wow-delay="0.1s">
                <p>© 2021 Stéphane Rathgeber - <a href="#">Mentions légales</a></p>
              </div>
              <div className="footer-social wow fadeInUp" data-wow-delay="0.3s">
                <a href="https://www.instagram.com/defispatisserie" className="link-instagram">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.facebook.com/stephane.rathgeber" className="link-facebook">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://twitter.com/DeveloppeurFree" className="link-twitter">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
