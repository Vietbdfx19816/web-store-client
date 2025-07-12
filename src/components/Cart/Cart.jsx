import React from 'react';

import CartList from './CartList';
import CartTotal from './CartTotal';

import classes from './Cart.module.css';

function Cart() {
  return (
    <section>
      <div className="container">
        <h2 className={classes.title}>Shopping Cart</h2>
        <div className={classes.wrapper}>
          <CartList />
          <CartTotal />
        </div>
      </div>
    </section>
  );
}

export default Cart;
