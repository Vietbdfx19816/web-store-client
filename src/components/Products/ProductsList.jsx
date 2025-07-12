// import react
import React from 'react';

// import component
import ProductItem from './ProductItem';

// import css module and
import classes from './ProductsList.module.css';

function ProductsList({ products, onClick }) {
  return (
    <div className={classes.productsList}>
      {products &&
        products.map(item => (
          <ProductItem
            key={item._id}
            data={item}
            onClick={() => {
              onClick(item);
            }}
          />
        ))}
    </div>
  );
}

export default ProductsList;
