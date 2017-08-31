import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';

class App extends Component {
    render() {
        return (
          <div>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/product' component={Product}/>
                  <Route exact path='/cart' component={Cart}/>
              </Switch>
          </div>
        );
    }
}

export default App;
