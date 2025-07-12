// helper function
// check empty
const isEmpty = data => data.trim() === '';

// check password length
const lessThanEight = data => data.length < 8;

// validate login
export const validateLoginForm = data => {
  if (isEmpty(data.email)) return { errorMsg: "Email can't be empty" };

  if (isEmpty(data.password)) return { errorMsg: "Password can't be empty" };

  if (lessThanEight(data.password))
    return { errorMsg: 'Password needs at least 8 characters' };

  return data;
};

// validate signup
export const validateSignupForm = data => {
  if (isEmpty(data.email)) return { errorMsg: "Email can't be empty" };

  if (isEmpty(data.password)) return { errorMsg: "Password can't be empty" };

  if (lessThanEight(data.password))
    return { errorMsg: 'Password has at least 8 characters' };

  if (isEmpty(data.username)) return { errorMsg: "Username can't be empty" };

  if (isEmpty(data.phoneNumber)) return { errorMsg: "Phone can't be empty" };

  return data;
};
