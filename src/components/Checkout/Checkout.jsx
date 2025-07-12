import React from 'react';

import CheckoutForm from './CheckoutForm';
import CheckoutOrder from './CheckoutOrder';

import classes from './Checkout.module.css';

function Checkout() {
  return (
    <section>
      <div className="container">
        <h2 className={classes.title}>Billing Detail</h2>
        <div className={classes.wrapper}>
          <CheckoutForm />
          <CheckoutOrder />
        </div>
      </div>
    </section>
  );
}

export default Checkout;
