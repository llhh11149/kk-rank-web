import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button } from "antd";
import Main from "./main";
import "./styles.css";
function App() {
  return <Main />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
