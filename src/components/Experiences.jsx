import React from "react";
import tree from "../assets/images/tree.png";
import ExpTree from "./common/ExpTree";
import datas from "../data/experiences.json"

const Experiences = () => {
  return (
    <section id="experiances">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h2>Expériences</h2>
            </div>
          </div>
          <div className="col-12">
          <div className="experiances-main">
          {datas.map((experience, key) => {
          return <ExpTree key={key} data={experience} />
        })}
          </div>
          </div>
        </div>
        <div className="tree-image">
          <img src={tree} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
