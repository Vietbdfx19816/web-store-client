import React from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../Products/ProductsList';
import useGetData from '../../hook/useGetData';
import { showPopup } from '../../store/popup';

import classes from './Trending.module.css';

function Trending() {
  const { data, loading, error } = useGetData('/store/products');
  const dispatch = useDispatch();

  const showPopupHandler = item => {
    dispatch(showPopup(item));
  };

  return (
    <section id="trending" className={classes.trending}>
      <div className="container">
        <p className={classes.subTitle}>Made the hard way</p>
        <h2 className={classes.title}>Top trending products</h2>
        {!loading && !error && data && (
          <ProductsList products={data.products} onClick={showPopupHandler} />
        )}
      </div>
    </section>
  );
}

export default Trending;
