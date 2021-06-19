import useImmerState from "./useImmerState";

export default function useStateBindMethods(initialState, methods) {
  let [state, setImmerState] = useImmerState(initialState);
  let immerMethods = {};
  for (let key in methods) {
    immerMethods[key] = (...args) => {
      setImmerState(methods[key], ...args);
    };
  }
  return [state, immerMethods];
}
