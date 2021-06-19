import React from "react";
import { CSSTransition } from "react-transition-group";
import useTransition from "./useTransition";
import "./index.css";

export default function MyTransition({ show, complex = false, children }) {
  const mountShow = useTransition();
  return (
    <CSSTransition
      in={show !== undefined ? show : mountShow} //为true进入显示组件（主要通过in属性来控制组件状态）
      classNames="fade" //设置类名的前缀
      timeout={500} //设置过渡动画事件
      unmountOnExit={true} //消失动画结束后 + display:none
    >
      {complex ? <div>{children}</div> : children}
    </CSSTransition>
  );
}
