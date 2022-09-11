import React from "react";

const Formation = ({where, what, when}) => {
  return (
      <div className="formations-item wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <h3><span>{what}</span> - {where}</h3>
                <p>{when}</p>
              </div>
  );
};

export default Formation;
