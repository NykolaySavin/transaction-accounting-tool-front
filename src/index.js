import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";

import App from "./js/components/index/App";
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};
require("es6-promise").polyfill();
require("isomorphic-fetch");

ReactDOM.render(<App />, document.getElementById("root"));
