import produce from "immer";
import { useReducer } from "react";

export default function useImmerReducer(reducer, initialArg, init) {
  let immerReducer = produce((draft, action) => {
    reducer(draft, action);
  });
  return useReducer(immerReducer, initialArg, init);
}
