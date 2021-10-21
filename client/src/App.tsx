import { Provider } from 'react-redux';
import Home from './components/Home';
import Nav from './components/Nav';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Home />
    </Provider>
  );
}

export default App;
