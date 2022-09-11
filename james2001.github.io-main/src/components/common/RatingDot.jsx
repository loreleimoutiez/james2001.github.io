import React from "react";

const RatingDot = ({ value }) => {
  const getDot = () => {
    let arr = [];
    for (let i = 1; i <= 4; i++) {
      if (i > value) {
        arr.push(<span key={i} className="unfill-color"></span>);
      } else {
        arr.push(<span key={i}className="fill-color"></span>);
      }
    }
    return arr;
  };
  return <div className="competences-rating">{getDot().map((dot) => dot)}</div>;
};

export default RatingDot;
