import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";
const sideDrawer = (props) => {
  let attatchedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attatchedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attatchedClasses.join(" ")}>
        <div className={classes.Logo}></div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
