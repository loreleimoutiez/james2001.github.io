import React from "react";
import dev from "../assets/images/dev.png";
import { withTranslation } from "react-i18next";

const About = ({ t }) => {
  return (
    <section id="qui-suis-je">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="qui-suis-je-image">
              <img src={dev} alt="moi" />
            </div>
            <div
              className="qui-suis-je-content wow animate__animated animate__fadeInUp"
              data-wow-delay="0s"
            >
              <div
                className="section-title wow animate__animated animate__fadeInUp"
                data-wow-delay="0.1s"
              >
                <h2>{t("title.about")}</h2>
              </div>
              <p>{t("about.part_1")}</p>
              <p>{t("about.part_2")}</p>
              <p>{t("about.part_3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation("common")(About);
