import React from "react";
import { Button } from "antd";

export default function About({ history }) {
  return <Button onClick={() => history.push("/index/home")}>About</Button>;
}
