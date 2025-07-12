import React, { useState } from 'react';

import { instance } from '../../hook/useGetData';

import classes from './CheckoutFrom.module.css';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

function CheckoutForm() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries());

    try {
      await instance.post('/user/order', { ...user, cart });
      dispatch(cartActions.update());
      navigate('/order');
    } catch (error) {
      setError(error.response.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name here!"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email here!"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number here!"
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address here!"
          required
        />
      </div>
      <div className={classes.action}>
        <button className="btn" type="submit">
          Place order
        </button>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
}

export default CheckoutForm;
