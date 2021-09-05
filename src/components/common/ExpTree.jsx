import React from "react";
import calender from "../../assets/images/calendar.svg";
import location from "../../assets/images/pin.svg";

const ExpTree = ({ data }) => {
  return (
    <div className="experiances-item wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
    <div className="experiance-position">
      <div className="experiances-name">
        <h3>{data.role}</h3>
        <p>{data.date} <img src={calender} alt="calender"/></p>
        <p><span>{data.location}</span> <img src={location} alt="location" /></p>
      </div>
    </div>
    <div className="experiance-office">
      <h3>{data.company}</h3>
      <p>{data.explanation}</p>
    </div>
  </div>
  );
};

export default ExpTree;
