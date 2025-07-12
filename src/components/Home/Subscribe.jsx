import React from 'react';

import { Form } from 'react-router';

import classes from './Subscribe.module.css';
import { useSelector } from 'react-redux';

function Subscribe() {
  const user = useSelector(state => state.user);
  return (
    <section id="subscribe">
      {!user && (
        <div className="container">
          <div className={classes.service}>
            <div>
              <h3>Free Shipping</h3>
              <p>Free shipping worldwide</p>
            </div>
            <div>
              <h3>24 x 7 Service</h3>
              <p>Free shipping worldwide</p>
            </div>
            <div>
              <h3>Festival Offer</h3>
              <p>Free shipping worldwide</p>
            </div>
          </div>
          <div className={classes.subscribe}>
            <div className={classes.formTitle}>
              <h2>Let's be friend!</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <Form className={classes.form}>
              <input
                type="email"
                id="subscribe"
                placeholder="Enter your email address"
              />
              <button className="btn" type="submit">
                Subscribe
              </button>
            </Form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Subscribe;
