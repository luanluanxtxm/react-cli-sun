import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";

export default function MyTransitionGroup({ list, children }) {
  return (
    <TransitionGroup>
      {list.map((item, index) => {
        return (
          <CSSTransition
            key={item + index}
            classNames="fade"
            timeout={500}
            unmountOnExit={true}
            appear={true}
          >
            {children(item, index)}
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
