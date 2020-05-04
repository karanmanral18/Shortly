import React from "react";
import Va2 from "../../assets/images/va.svg";
import classes from "./VectorArt.module.css";

const vectorArt = () => (
  <div className={classes.VectorArt}>
    <div className={classes.Jumbo}>
      <h3 style={{ color: "#26de81" }}>
        <span style={{ color: "#ff7675" }}>Create click worthy</span> Links
      </h3>
      <p style={{ color: "#a5b1c2" }}>
        Shorten your urls on the go with Shortly URL Microservice{" "}
      </p>
    </div>
    <img src={Va2} alt="MyBurger" />
  </div>
);

export default vectorArt;
