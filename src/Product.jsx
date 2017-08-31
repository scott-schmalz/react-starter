import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
          <div>
              <h1>Product</h1>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/cart'>Cart</Link></li>
              </ul>
          </div>
        );
    }
}

export default Product;
