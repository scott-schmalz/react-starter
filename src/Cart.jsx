import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
          <div>
              <h1>Cart</h1>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/product'>Product</Link></li>
              </ul>
          </div>
        );
    }
}

export default Cart;
