import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import CartBanner from '../components/Cart/CartBanner';
import Cart from '../components/Cart/Cart';

function CartPage() {
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();
  const user = auth.user; // primitive value not trigger useEffect multiple time

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  return (
    <Fragment>
      <CartBanner />
      {user && <Cart />}
    </Fragment>
  );
}

export default CartPage;
