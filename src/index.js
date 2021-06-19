import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyRouter from "@/component/MyRouter";
import reportWebVitals from "./reportWebVitals";
import routes from "@/router";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import stores from "@/store/index";
import "antd/dist/antd.css";

configure({ enforceActions: true });

ReactDOM.render(
  <Provider {...stores}>
    <MyRouter routes={routes}></MyRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
