import React from "react";
import RatingDot from "./RatingDot";

const ListSkills = ({ title, arr }) => {
  return (
    <div className="competences-item-main wow animate__animated animate__fadeInLeft" data-wow-delay="0s">
    <div className="competences-name">
        <h4>{title}</h4>
      </div>
      <div className="competences-item-wraper">
        {arr.map((a, key) => {
          return (
                <div key={key} className="competences-item">
                  <h3>{a.title}</h3>
                <RatingDot value={a.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSkills;
