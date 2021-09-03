import React from "react";
import dev from "../assets/images/dev.png";

const About = () => {
  return (
    <section id="qui-suis-je">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="qui-suis-je-image">
            <img src={dev} alt="moi" />
          </div>
          <div className="qui-suis-je-content wow fadeInUp" data-wow-delay="0s">
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>Qui suis-je ?</h2>
            </div>
            <p>Développeur PHP depuis plus de 10 ans et développeur Symfony depuis sa version 1.3, j'ai eu l'occasion de travailler avec de grandes sociétés (Renault, Accor, My Money Bank, AXA, Cardif, Maif).</p>
            <p>J'ai accompagné et fait monter en compétence, par mon expertise, plusieurs dizaines de développeurs.</p>
            <p>Je suis capable de commencer une application "from scratch" ou d'en reprendre une existante pour la faire évoluer. Je peux également mettre en place un système de déploiement continu.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
