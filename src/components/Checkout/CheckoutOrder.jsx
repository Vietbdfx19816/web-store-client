import React from 'react';

import classes from './CheckoutOrder.module.css';
import { useSelector } from 'react-redux';

function CheckoutOrder() {
  const cart = useSelector(state => state.cart);
  const { products, coupon } = cart;

  const total = products.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );
  // apply coupon
  const couponPrice = total - coupon;

  return (
    <div className={classes.order}>
      <h2>Your Order</h2>
      {products.map(item => (
        <div key={item._id} className={classes.detail}>
          <p className={classes.name}>{item.name}</p>
          <p className={classes.price}>{`${item.price.toLocaleString(
            'de-DE'
          )} VND x ${item.amount}`}</p>
        </div>
      ))}
      <div className={classes.total}>
        <h3>Total</h3>
        <p>{`${couponPrice.toLocaleString('de-DE') || '0'} VND`}</p>
      </div>
    </div>
  );
}

export default CheckoutOrder;
