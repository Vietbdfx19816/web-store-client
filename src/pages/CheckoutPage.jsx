import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';

import CheckoutBanner from '../components/Checkout/CheckoutBanner';
import Checkout from '../components/Checkout/Checkout';
import { useSelector } from 'react-redux';

function CheckoutPage() {
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();
  const user = auth.user;

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  return (
    <Fragment>
      <CheckoutBanner />
      {user && <Checkout />}
    </Fragment>
  );
}

export default CheckoutPage;
