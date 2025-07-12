import React, { useState } from 'react';

import { validateSignupForm } from '../../util/validate';

import { instance } from '../../hook/useGetData';

import classes from './LoginForm.module.css';

// Main component
function SignupForm(props) {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const signupHandler = async e => {
    e.preventDefault();
    setError(null);
    setMessage('');

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const validated = validateSignupForm(formJson);

    if (validated?.errorMsg) {
      return setError(validated.errorMsg);
    }

    try {
      const res = await instance.post('/auth/signup', formJson);

      setMessage(res.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section>
      <div className={classes.wrapper}>
        <h1>Sign Up</h1>

        {error && (
          <div className={classes.error}>
            {/* form validate message*/}
            {error}
          </div>
        )}
        {message && (
          <div className={classes.success}>
            {/* form validate message*/}
            {message}
          </div>
        )}

        <form onSubmit={signupHandler}>
          <input type="email" placeholder="Email" name="email" required />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <input type="text" placeholder="Username" name="username" required />

          <input type="tel" placeholder="Phone" name="phoneNumber" required />

          <div className={classes.action}>
            <button className="btn" type="submit">
              Sign up
            </button>
            <p>
              Login?
              <span onClick={props.onToggleMode}> Click</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignupForm;
