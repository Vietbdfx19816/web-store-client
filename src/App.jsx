// import Redux
import { Provider } from 'react-redux';
import store from './store/redux-store';

// import Router
import { createBrowserRouter, RouterProvider } from 'react-router';

// import Component
import HomePage from './pages/HomePage';
import Layout from './components/Layouts/Layout';
import ShopPage from './pages/ShopPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HistoryPage from './pages/HistoryPage';
import OrderList from './components/History/OrderList';
import OrderDetail from './components/History/OrderDetail';
import AuthPage from './pages/AuthPage';
import ErrorPage from './pages/ErrorPage';

// import actions and loaders
import { loader as orderListLoader } from './components/History/OrderList';
import { loader as orderDetailLoader } from './components/History/OrderDetail';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: '/shop', element: <ShopPage /> },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/order',
        element: <HistoryPage />,
        children: [
          {
            index: true,
            loader: orderListLoader,
            element: <OrderList />,
          },
          {
            path: ':orderId',
            loader: orderDetailLoader,
            element: <OrderDetail />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
