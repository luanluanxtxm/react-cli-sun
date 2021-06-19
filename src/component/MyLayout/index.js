import React, { Fragment } from "react";
import indexCss from "./index.module.css";

export default function MyLayout({ children }) {
  return (
    <Fragment>
      <div className={indexCss.title}>MyLayout</div>
      {children}
    </Fragment>
  );
}
