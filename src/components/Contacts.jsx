import React from "react";
import contact from "../assets/images/contact.png";
import arrowUp from "../assets/images/arrow-up.png";

const Contacts = () => {
  return (
    <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-wraper wow fadeInUp" data-wow-delay="0.3s">
            <form action="" method="">
              <div className="input-box">
                <input type="text" name="name" placeholder="Nom" required="required" />
                <input type="email" name="email" placeholder="E-mail" required="required" />
                <input type="text" name="subject" placeholder="Sujet" required="required" />
              </div>
              <textarea cols="10" rows="10" placeholder="Message" required="required"></textarea>
              <div className="form-btn wow fadeInUp" data-wow-delay="0.1s">
                <button type="submit">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mailbox-image">
        <img src={contact} alt="#" />
      </div>
    </div>
    <div className="back-to-top">
      <a href="#header">
        <img src={arrowUp} alt="#" />
      </a>
    </div>
  </section>
  );
};

export default Contacts;
