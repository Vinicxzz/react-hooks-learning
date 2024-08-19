import "./App.css";
import { AppContext } from "./components/contexts/AppContexts";
import { Div } from "./components/Div/Div";

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
