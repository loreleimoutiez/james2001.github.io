import React from "react";
import Certification from "./common/Certification";
import openclassrooms from "../assets/images/openclassrooms.png";
import datas from "../data/certifications.json";
import { withTranslation } from "react-i18next";

const Certifications = ({ t }) => {
  return (
    <section id="certifications">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="section-title wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <h2>{t("title.certifications")}</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="certifications-wraper">
              <div
                className="certifications-left wow animate__animated animate__fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src={openclassrooms} alt="#" />
              </div>
              <div
                className="certifications-list wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                {datas.map((certification, key) => {
                  return (
                    <Certification
                      key={key}
                      name={certification.name}
                      year={certification.year}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation("common")(Certifications);
