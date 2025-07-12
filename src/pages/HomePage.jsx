import React, { Fragment } from 'react';
import Banner from '../components/Home/Banner';
import Categories from '../components/Home/Categories';
import Trending from '../components/Home/Trending';
import Subscribe from '../components/Home/Subscribe';
import ProductPopup from '../components/Products/ProductPopup';

function HomePage() {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <Trending />
      <ProductPopup />
      <Subscribe />
    </Fragment>
  );
}

export default HomePage;
