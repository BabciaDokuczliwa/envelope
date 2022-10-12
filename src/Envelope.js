import React from "react";
import "./envelope.css";
import { TbChristmasTree } from "react-icons/tb";
function Envelope(props) {
  return (
    <div className="wrap">
      <div className="top">
        <div className="left">
          <p>{props.fromPerson.fullName}</p>
          <p>{props.fromPerson.street}</p>
          <p>{props.fromPerson.country}</p>
        </div>
        <div className="right">
          <TbChristmasTree style={{ fontSize: "60px" }} />
        </div>
      </div>
      <div className="bottom">
        <p>{props.toPerson.fullName}</p>
        <p>{props.toPerson.street}</p>
        <p>{props.toPerson.country}</p>
      </div>
    </div>
  );
}

export default Envelope;
