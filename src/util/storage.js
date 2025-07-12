// import axios from 'axios';

// export const getStorageUser = () => {
//   const CURRENT_USER = localStorage.getItem('USER');
//   console.log(CURRENT_USER);

//   if (!CURRENT_USER) {
//     // remove expire date if it exists
//     localStorage.removeItem('EXPPIREs');

//     // logout server, clean old section
//     try {
//       axios.get('http://localhost:5000/api/auth/logout', {
//         withCredentials: true,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//     return null;
//   }

//   const EXP_DATE = localStorage.getItem('EXPIRES');

//   const currentUser = JSON.parse(CURRENT_USER);
//   const currentDate = new Date().getTime();
//   const expireDate = new Date(EXP_DATE).getTime();

//   if (EXP_DATE && expireDate < currentDate) {
//     localStorage.removeItem('USER');
//     localStorage.removeItem('EXPIRES');
//     return null;
//   }

//   return { ...currentUser };
// };
