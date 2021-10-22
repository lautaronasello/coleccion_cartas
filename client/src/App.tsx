import { Provider } from 'react-redux';
import Home from './components/Home';
import Layout from './layout';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCard from './components/AddCard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/cards/add' component={AddCard} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
