import React from "react";
import { checkPropTypes } from "prop-types";
import classes from "./NavigationItem.module.css";
const navaigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navaigationItem;
