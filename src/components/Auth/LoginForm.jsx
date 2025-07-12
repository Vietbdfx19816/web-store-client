import React, { useState } from 'react';
import { instance } from '../../hook/useGetData';

import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import { validateLoginForm } from '../../util/validate';

import classes from './LoginForm.module.css';

// Main component
function LoginForm(props) {
  // state
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // Log in function
  const loginHandler = async e => {
    e.preventDefault();
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const validated = validateLoginForm(formJson);

    if (validated?.errorMsg) {
      return setError(validated.errorMsg);
    }
    try {
      const res = await instance.post('/auth/login', formJson);
      const userData = res.data;
      console.log('login');

      dispatch(authActions.login(userData));
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // Render
  return (
    <section>
      <div className={classes.wrapper}>
        <h1>Sign In</h1>

        <div className={classes.error}>{error && <p>{error}</p>}</div>

        <form onSubmit={loginHandler}>
          <input type="email" placeholder="Email" name="email" required />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <div className={classes.action}>
            <button className="btn" type="submit">
              Sign in
            </button>
            <p>
              Create an account?
              <span onClick={props.onToggleMode}> Sign up</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
