import React, { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router';

import useGetData from '../../hook/useGetData';

import ShopNavigation from './ShopNavigation';
import ProductsList from '../Products/ProductsList';
import ShopSearchForm from './ShopSearchForm';

import classes from './ShopCategories.module.css';

function ShopCategories() {
  const { data, loading, error, fetchData } = useGetData();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const url = `/store/products`;
    fetchData(url, searchParams);
  }, [searchParams, fetchData]);

  // transform data
  const productsList = data?.products;

  const showPopupHandler = item => {
    navigate(`/detail/${item._id}`);
  };

  return (
    <section>
      <div className="container">
        <div className={classes.wrapper}>
          <ShopNavigation />
          <div className={classes.list}>
            <ShopSearchForm />
            {!loading && !error && productsList && (
              <ProductsList
                products={productsList}
                onClick={showPopupHandler}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCategories;
