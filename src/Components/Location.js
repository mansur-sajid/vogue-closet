import React from "react";
import "./Css/Location.css";

function Location(props) {
  return (
    <>
      <div className="col-md-3 mt-md-0 mt-3 location">
        <h6>{props.city}</h6>
        <a href={"mailto:" + props.email} className="email">
          {props.email}
        </a>
        <br />
        <a href="/" className="phone">
          {props.phone}
        </a>
        <br />
        <p className="address">{props.address}</p>
        <a href="/" className="map">
          see on map <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
}

export default Location;
