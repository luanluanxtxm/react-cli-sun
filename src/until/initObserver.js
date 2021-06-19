import { inject, observer } from "mobx-react";

export default function initObserver(injectKey, render) {
  return inject(injectKey)(observer((props) => render(props)));
}
