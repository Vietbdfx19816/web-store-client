///////////////////////////////////
// Handle user list in localStorage
const EXPIRES = 'EXPIRES';

export const getDuration = () => {
  const expires = localStorage.getItem(EXPIRES);

  if (!expires) return null;

  const exp_date = new Date(JSON.parse(expires));
  const curr_date = new Date();

  return exp_date.getTime() - curr_date.getTime();
};

export const setExpires = value =>
  localStorage.setItem(EXPIRES, JSON.stringify(value));

///////////////////////////////////
// Handle User data
const USER = 'USER';

export const getUser = () => {
  const duration = getDuration();
  const user = localStorage.getItem(USER);

  if (duration && duration > 0 && user) return JSON.parse(user);

  return null;
};

export const setUser = user => localStorage.setItem(USER, JSON.stringify(user));

export const cleanStorage = () => {
  localStorage.removeItem(USER);
  localStorage.removeItem(EXPIRES);
};

///////////////////////////////////
// Handle Cart data
const CART_LIST = 'CART_LIST';

export const getCartList = () =>
  JSON.parse(
    localStorage.getItem(CART_LIST) || '{ "products" : [], "coupon":0 }'
  );

export const setCartList = state =>
  localStorage.setItem(CART_LIST, JSON.stringify(state));

const ROOM_ID = 'ROOM_ID';

export const getLocalRoomId = () => {
  return localStorage.getItem(ROOM_ID);
};
export const setLocalRoomId = roomId => {
  if (!roomId) return localStorage.removeItem(ROOM_ID);
  localStorage.setItem(ROOM_ID, roomId);
};
