import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router/router";
import "./index.css";

const App = () => (
    <Router/>
);
ReactDOM.render(<App/>, document.getElementById("app"));
