import React from "react";
import { GithubPicker } from "react-color";
import colors from "./colors.js";

export default function ColorPicker(props) {
  return (
    <GithubPicker
      width={"76px"}
      onChange={props.handleChange}
      triangle="hide"
      colors={colors}
    />
  );
}
