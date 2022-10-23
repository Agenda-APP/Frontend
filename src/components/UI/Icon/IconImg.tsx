import React, { Component } from "react";
import "./style.css";

export class IconPlus extends Component {
  static defaultProps = {
    width: "7",
    height: "7",
    stroke: "#d5d5d5",
    fill: "#000",
  };

  render() {
    return (
      <svg
        className="icon-plus"
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
        stroke={this.props.stroke}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 6.39999V13.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.4 10H13.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
