import React, { useEffect } from 'react';
import { useRouteError, useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import classes from './ErrorComponent.module.css';

const ErrorComponent = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AUTH_ERROR = error?.status === 401;
  const PERMISSION_ERROR = error?.status === 403;

  useEffect(() => {
    if (AUTH_ERROR) {
      dispatch(authActions.logout());
      navigate('/auth');
    }
  }, [AUTH_ERROR, navigate, dispatch]);

  return (
    <div className="container">
      <div className={classes.error}>
        <h1>Oops!</h1>
        <h2>{error?.status}</h2>
        <p>
          <i>
            {error?.statusText ||
              error?.message ||
              'Sorry, an unexpected error has occurred.'}
          </i>
        </p>
        <div>
          <button
            type="button"
            onClick={() => navigate('/', { replace: true })}
          >
            Home Page
          </button>

          {/* show logout button when authorization failed,
              permission denied */}
          {PERMISSION_ERROR && (
            <button
              type="button"
              onClick={() => {
                dispatch(authActions.logout());
                navigate('/auth');
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
