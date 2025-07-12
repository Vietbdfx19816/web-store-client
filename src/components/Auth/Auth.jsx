import React, { Fragment, useState } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(state => !state);
  };

  return (
    <Fragment>
      {isLogin && <LoginForm onToggleMode={toggleMode} />}
      {!isLogin && <SignupForm onToggleMode={toggleMode} />}
    </Fragment>
  );
}

export default Auth;
