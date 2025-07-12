import React from 'react';
import { Link } from 'react-router';
import classes from './CheckoutBanner.module.css';

function CheckoutBanner() {
  return (
    <div className="container">
      <div className={classes.banner}>
        <h2>Checkout</h2>
        <p>
          Home /<Link to="/cart"> Cart</Link> / <span>Checkout</span>
        </p>
      </div>
    </div>
  );
}

export default CheckoutBanner;
