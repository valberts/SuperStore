import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/Styles.scss'
import Home from './pages/Home';
import Deals from './pages/Deals';
import Cart from './pages/Cart';
import Nav from './components/Nav'

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className = 'App'>
          <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/deals" component={Deals} />
              <Route path="/cart" component={Cart} />
            </Switch>
        </div>
      </Router>
    );
  }

}
