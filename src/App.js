import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact path="/"
            render={() => (
              <Home
              />
            )}
          />
          <Route
            path="/details"
            render={() => (
              <Details
              />
            )}
          />
        </Switch>
      </div>
    );
  }
  }

export default App;
