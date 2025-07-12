import React from 'react';

import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CartItem from './CartItem';

import classes from './CartList.module.css';
import { useSelector } from 'react-redux';

function CartList() {
  // connect to list state in redux
  const cart = useSelector(state => state.cart);

  const products = cart.products;
  const productEmpty = products.length === 0;

  return (
    <div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {productEmpty && (
            <tr className={classes.empty}>
              <td colSpan={6}>Empty cart</td>
            </tr>
          )}
          {!productEmpty &&
            products.map(item => (
              <CartItem
                key={item._id}
                id={item._id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                image={item.img1}
              />
            ))}
        </tbody>
      </table>
      <div className={classes.navigate}>
        <Link to="/shop">
          <div className={classes.shopping}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Continue Shopping</span>
          </div>
        </Link>
        {!productEmpty && (
          <Link to="/checkout">
            <div className={classes.checkout}>
              <span>Proceed to Checkout</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartList;
