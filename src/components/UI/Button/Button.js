import React from "react";
import classes from "./Button.module.css";

const button = (props) => (
  <button
    // Here adding andother classes (Sucess,Danger) based on props we got and join the array with whitespace
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
