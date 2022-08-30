import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    const history = createMemoryHistory();
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" history={ history } component={ Login } />
            <Route exact path="/carteira" history={ history } component={ Wallet } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
