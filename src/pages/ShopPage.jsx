import React, { Fragment } from 'react';

import ShopBanner from '../components/Shop/ShopBanner';
import ShopCategories from '../components/Shop/ShopCategories';

function ShopPage() {
  return (
    <Fragment>
      <ShopBanner />
      <ShopCategories />
    </Fragment>
  );
}

export default ShopPage;
