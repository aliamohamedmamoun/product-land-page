import React from "react";
//import FontAwesomeIcon from "@fortawesome/react-fontawesome";
const Feature = props => {
  return (
    // props.featuresData.map(data => (
    // <i className="fa">{props.icon}</i>
    <div>
      <div id="icon">
        <i class={props.icon}></i>
      </div>
      <div id="txt">
        <h2>{props.header}</h2>
        <p>{props.parag}</p>
      </div>
    </div>
  );
};

export default Feature;
