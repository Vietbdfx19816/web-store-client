import React, { Fragment } from 'react';

import { useLoaderData } from 'react-router';
import { instance } from '../../hook/useGetData';

import classes from './OrderDetail.module.css';

const OrderDetail = () => {
  const data = useLoaderData();

  const order = data?.order;

  return (
    <div className="container">
      {order && (
        <Fragment>
          <div className={classes.orderInfo}>
            <h1>Information Order</h1>
            <p>{`User ID: ${order.user._id}`}</p>
            <p>{`Full Name: ${order.user.fullName}`}</p>
            <p>{`Phone Number: ${order.phoneNumber}`}</p>
            <p>{`Address: ${order.address}`}</p>
            <p>{`Total: ${order.totalPrice.toLocaleString('de-DE')} VND`}</p>
          </div>
          <div className={classes.table}>
            <div className={classes.tableHead}>
              <div className={classes.tableRow}>
                <p>Id product</p>
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
                <p>Count</p>
              </div>
            </div>
            <div className={classes.tableBody}>
              {order.products.map(product => {
                return (
                  <div className={classes.tableRow} key={product.product._id}>
                    <p>{product.product._id}</p>
                    <img
                      src={product.product.img1}
                      alt={product.product.name}
                    />
                    <p>{product.product.name}</p>
                    <p>{`${product.product.price.toLocaleString(
                      'de-DE'
                    )} VND`}</p>
                    <p>{product.amount}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default OrderDetail;

export const loader = async function ({ params }) {
  const orderId = params.orderId;

  try {
    const res = await instance.get(`user/order/${orderId}`);

    return res.data;
  } catch (error) {
    throw error.response;
  }
};
