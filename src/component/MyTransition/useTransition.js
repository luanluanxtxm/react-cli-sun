import useStateBindMethods from "@/hooks/useStateBindMethods";
import { useMount } from "ahooks";

export default function useTransition() {
  const init = {
    show: false,
  };
  const fns = {
    setShow(init, value) {
      init.show = value;
    },
  };
  const [{ show }, { setShow }] = useStateBindMethods(init, fns);

  useMount(() => {
    if (setShow) {
      setShow(false);
      setShow(true);
    }
  });

  return show;
}
