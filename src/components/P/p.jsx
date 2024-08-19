import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContexts";

export const P = () => {
  const bodyContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    setState,
  } = bodyContext;

  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
      {counter}
    </p>
  );
};
