import React, { Component } from "react";
import classes from "./CopyPanel.module.css";
import axios from "axios";
import ShortPanel from "./ShortPanel/ShortPanel";
import VectorArt from "../VectorArt/VectorArt";
import Backdrop from "..//UI/Backdrop/Backdrop";
import backdrop from "..//UI/Backdrop/Backdrop";

class CopyPanel extends Component {
  state = {
    longURL: "",
    isShortPresent: false,
    shortUrl: "",
    copied: false,
  };

  postDataHandler = () => {
    const longURL = {
      longUrl: this.state.longURL,
    };

    if (this.state.longURL === "") {
      console.log("Empty");

      return;
    }

    this.setState({ isShortPresent: true });
    axios
      .post("https://shortly86505.herokuapp.com/api/url/shorten", longURL)
      .then((response) => {
        console.log(response);
        this.setState({ shortUrl: response.data.shortUrl });
      });
  };

  clearDataHandler = () => {
    this.setState({ longURL: "" });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };
  render() {
    let form = (
      <div className={classes.Form}>
        <input
          type="text"
          name="longURL"
          placeholder="Shorten your Link"
          onChange={(event) => this.setState({ longURL: event.target.value })}
        />
        <button onClick={this.postDataHandler}>Shorten</button>
      </div>
    );

    if (this.state.isShortPresent) {
      form = (
        <React.Fragment>
          <div className={classes.Form}>
            <input
              type="text"
              name="longURL"
              placeholder="Shorten your Link"
              value={this.state.longURL}
              onChange={(event) =>
                this.setState({ longURL: event.target.value })
              }
            />
            <button
              onClick={
                this.state.longURL !== ""
                  ? this.clearDataHandler
                  : this.postDataHandler
              }
            >
              {this.state.longURL === "" ? (
                <span>Shorten</span>
              ) : (
                <span>Clear</span>
              )}
            </button>
            <ShortPanel
              copied={this.state.copied}
              shortUrl={this.state.shortUrl}
            />
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Backdrop />
        <VectorArt />
        {form}
      </React.Fragment>
    );
  }
}

export default CopyPanel;
