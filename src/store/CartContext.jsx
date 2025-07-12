// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';

// import { instance } from '../hook/useGetData';
// import { AuthContext } from './AuthContext';

// export const CartContext = createContext(null);

// const CartInit = { products: [], total: 0, coupon: 0 };

// export const CartProvider = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const [cart, setCart] = useState(CartInit);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getCart = async () => {
//       setLoading(true);
//       try {
//         const res = await instance.get('/user/cart');
//         setCart(res.data);
//       } catch (error) {
//         setCart({ products: [], total: 0 });
//       }
//       setLoading(false);
//     };

//     if (user) {
//       getCart();
//     }
//   }, [user]);

//   const postCart = useCallback(async product => {
//     setLoading(true);
//     try {
//       const res = await instance.post('/user/cart', product);
//       setCart(res.data);
//     } catch (error) {
//       console.log(error.response);
//     }
//     setLoading(false);
//   }, []);

//   const resetCart = () => {
//     setLoading(false);
//     setCart(CartInit);
//   };

//   return (
//     <CartContext.Provider value={{ cart, loading, postCart, resetCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
