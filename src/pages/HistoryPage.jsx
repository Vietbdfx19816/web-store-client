import React, { Fragment, useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router';

import HistoryBanner from '../components/History/HistoryBanner';
import { useSelector } from 'react-redux';

const HistoryPage = () => {
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
      <HistoryBanner />
      {user && <Outlet />}
    </Fragment>
  );
};

export default HistoryPage;
