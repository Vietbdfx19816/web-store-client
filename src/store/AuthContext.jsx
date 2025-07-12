// import React, { createContext, useState } from 'react';
// import { instance } from '../hook/useGetData';
// import { getStorageUser } from '../util/storage';

// export const AuthContext = createContext(null);

// const CURRENT_USER = getStorageUser();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(CURRENT_USER);
//   const [error, setError] = useState(null);

//   const logIn = async formJson => {
//     setError(null);
//     try {
//       const res = await instance.post('/auth/login', formJson);

//       const user = res.data.user;
//       const userData = { username: user.username, role: user.role };

//       localStorage.setItem('CURRENT_USER', JSON.stringify(userData));

//       setUser(userData);
//     } catch (error) {
//       console.log(error);

//       setError(error.response.data.errors);
//     }
//   };

//   const logOut = async () => {
//     try {
//       await instance.get('/auth/logout');

//       localStorage.removeItem('CURRENT_USER');
//       localStorage.removeItem('EXP_DATE');
//       setUser(null);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, error, logIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
