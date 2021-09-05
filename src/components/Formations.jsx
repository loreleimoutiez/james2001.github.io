import React from "react";
import cap from "../assets/images/graduation.png";
import datas from "../data/formations.json"
import Formation from "./common/Formation";

const Formations = () => {
  return (
    <section id="formations">
    <div className="container">
      <div className="graduation-image">
        <img src={cap} alt="skill" />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section-title wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h2>Formations</h2>
            </div>
          </div>
          <div className="col-12">
          <div className="formations-main">
          {datas.map((formation, key) => {
              return <Formation key={key}  where={formation.where} when={formation.when} what={formation.what} />
      })}              

            </div>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Formations;
