import React from "react";
import { Button } from "antd";

export default function Home({ history }) {
  return <Button onClick={() => history.push("/index/about")}>Home</Button>;
}
