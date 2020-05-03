import React, { Component } from "react";
import classes from "./ShortPanel.module.css";
import CopytoClipboard from "react-copy-to-clipboard";

class CopyPanel extends Component {
  state = {
    copied: false,
  };
  onCopy = () => {
    this.setState({ copied: true });
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };

  render() {
    let p = (
      <div
        className={classes.ShortDiv}
        onCopy={this.onCopy}
        text={this.props.shortUrl}
      >
        <input
          type="text"
          name="longURL"
          value={!this.props.shortUrl ? "Loading..." : this.props.shortUrl}
          className={classes.ShortInput}
          onChange={this.onChange}
        />
        <CopytoClipboard onCopy={this.onCopy} text={this.props.shortUrl}>
          <button className={classes.ShortButton}>
            {this.state.copied ? <span>Copied</span> : <span>Copy</span>}
          </button>
        </CopytoClipboard>
      </div>
    );

    return p;
  }
}

export default CopyPanel;
