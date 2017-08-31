import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
          <div>
              <h1>Home</h1>
              <ul>
                  <li><Link to='/product'>Product</Link></li>
                  <li><Link to='/cart'>Cart</Link></li>
              </ul>
          </div>
        );
    }
}

export default Home;
