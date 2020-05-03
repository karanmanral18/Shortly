import React from "react";
import Va2 from "../../assets/images/va2.jpg";
import classes from "./VectorArt.module.css";

const vectorArt = () => (
  <div className={classes.VectorArt}>
    <div className={classes.Jumbo}>
      <h3 style={{ color: "#26de81" }}>
        <span style={{ color: "#ff7675" }}>Short</span>ly
      </h3>
      <p style={{ color: "#a5b1c2" }}>Shorten your urls on the GO</p>
    </div>
    <img src={Va2} alt="MyBurger" />
  </div>
);

export default vectorArt;
