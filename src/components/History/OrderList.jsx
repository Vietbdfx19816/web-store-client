import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import { useLoaderData, useNavigate } from 'react-router';
import { instance } from '../../hook/useGetData';

import classes from './OrderList.module.css';

const OrderList = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const orders = data?.orders;

  return (
    <div className="container">
      <div className={classes.table}>
        <div className={classes.tableHead}>
          <div className={classes.tableRow}>
            <p>Id order</p>
            <p>Id user</p>
            <p>Name</p>
            <p>Phone</p>
            <p>Address</p>
            <p>Total</p>
            <p>Delivery</p>
            <p>Status</p>
            <p>Detail</p>
          </div>
        </div>
        <div className={classes.tableBody}>
          {orders && orders.length === 0 && <p>No Order</p>}
          {orders &&
            orders.map(order => {
              return (
                <div className={classes.tableRow} key={order._id}>
                  <p>{order._id}</p>
                  <p>{order.user._id}</p>
                  <p>{order.user.fullName}</p>
                  <p>{order.phoneNumber}</p>
                  <p>{order.address}</p>
                  <p>{`${order.totalPrice.toLocaleString('de-DE')} VND`}</p>
                  <p>{order.delivery}</p>
                  <p>{order.status}</p>
                  <p
                    className={classes.btn}
                    onClick={() => navigate(`${order._id}`)}
                  >
                    <span>View</span>
                    <FontAwesomeIcon icon={faRightLong} />
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OrderList;

export const loader = async function () {
  try {
    const res = await instance.get('/user/orders', { withCredentials: true });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};
