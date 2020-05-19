import React from "react";
const Features = props => {
  return (
    // props.featuresData.map(data => (
    <div>
      <div id="icon">
        <i className="fa">{props.icon}</i>
      </div>
      <div id="txt">
        <h2>{props.header}</h2>
        <p>{props.parag}</p>
      </div>
    </div>
  );
};

export default Features;
