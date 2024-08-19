import { useContext } from "react";
import { GlobalContext } from "../contexts/AppContexts";

export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = theContext;

  return (
    <>
      <h1>{title}</h1>
      <p>{counter}</p>
    </>
  );
};
