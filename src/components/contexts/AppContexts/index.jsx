import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

export const AppContext = (props) => {
  const [state, setState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {/*eslint-disable-next-line*/}
      {props.children}
    </GlobalContext.Provider>
  );
};
