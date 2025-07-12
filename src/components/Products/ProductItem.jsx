import React from 'react';

import classes from './ProductItem.module.css';

function ProductItem({ data, onClick }) {
  return (
    <div className={classes.product}>
      <div className={classes.image} onClick={onClick}>
        <img src={data.img1} alt={data.name} />
      </div>

      <p className={classes.name}>{data.name}</p>
      <p className={classes.price}>{`${data.price.toLocaleString(
        'de-DE'
      )} VND`}</p>
    </div>
  );
}

export default ProductItem;
