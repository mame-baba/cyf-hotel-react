import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="card">
      <img
        src="https://media.timeout.com/images/105758218/630/472/image.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <a
          href="https://peoplemakeglasgow.com"
          target="_blank"
          className="btn btn-primary"
        >
          Go Somewhere
        </a>
      </div>
    </div>
  );
};
export default TouristInfoCards;
