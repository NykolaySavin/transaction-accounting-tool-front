import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";

import App from "./js/components/index/App";

require("es6-promise").polyfill();
require("isomorphic-fetch");

ReactDOM.render(<App />, document.getElementById("root"));
