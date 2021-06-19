import produce from "immer";
import { useState } from "react";

export default function useImmerState(initialState) {
  let [state, setState] = useState(initialState);
  let setImmerState = (param, ...args) => {
    if (typeof param === "function") {
      setState(
        produce((draft) => {
          param(draft, ...args);
        })
      );
    } else if (typeof param === "object") {
      setState(
        produce((draft) => {
          diffAttribute(draft, param);
        })
      );
    } else {
      setState(param);
    }
  };
  return [state, setImmerState];
}

function diffAttribute(draft, param) {
  for (let key in param) {
    if (typeof param[key] !== "object") {
      draft[key] = param[key];
    } else {
      diffAttribute(draft[key], param[key]);
    }
  }
}
