import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Auth from '../components/Auth/Auth';

function LoginPage() {
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();
  const user = auth?.user;

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return <Auth />;
}

export default LoginPage;
