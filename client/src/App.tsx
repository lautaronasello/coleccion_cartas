import { Provider } from "react-redux";
import Home from "./components/Home";
import { store } from "./store";


function App() {
  return (
    <Provider store={store}>
    <Home name='lautaro'/>
    </Provider>
  );
}

export default App;
