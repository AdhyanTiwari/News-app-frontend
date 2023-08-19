import React, { Component } from "react";
import Load from "../images/Round.gif";

const Loading = ({state}) => {
  if (state === true) {
    return (
      <div className="text-center">
        <img src={Load} alt="Loading" style={{ width: "2rem" }} />
      </div>
    );
  }
}

export default Loading;
