import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import classes from './CartTotal.module.css';
import { useSelector } from 'react-redux';

function CartTotal() {
  const cart = useSelector(state => state.cart);

  const { products, coupon } = cart;
  const total = products?.reduce((t, curr) => t + curr.price * curr.amount, 0);

  const couponPrice = total - coupon;

  return (
    <div className={classes.cartTotal}>
      <h2>Cart Total</h2>
      <div className={classes.subtotal}>
        <h3>Subtotal</h3>
        <p>{`${total?.toLocaleString('de-DE') || '0'} VND`}</p>
      </div>
      <div className={classes.total}>
        <h3>Total</h3>
        <p>{`${couponPrice?.toLocaleString('de-DE') || '0'} VND`}</p>
      </div>
      <div className={classes.coupon}>
        <input type="text" placeholder="Enter your coupon" name="coupon" />
        <button className="btn">
          <FontAwesomeIcon icon={faGift} />
          Apply coupon
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
