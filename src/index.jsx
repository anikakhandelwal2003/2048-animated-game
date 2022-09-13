import React from "react";
import ReactDom from "react-dom";
import Boardview from "./components/Board"
import "./main.scss";
import "./styles.scss";

const App = () => {
    return <Boardview />
};

ReactDom.render(<App/> ,document.getElementById("root"));
