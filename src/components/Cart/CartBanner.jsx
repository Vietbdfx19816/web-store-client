import React from 'react';

import classes from './CartBanner.module.css';

function CartBanner() {
  return (
    <div className="container">
      <div className={classes.banner}>
        <h2>Cart</h2>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default CartBanner;
