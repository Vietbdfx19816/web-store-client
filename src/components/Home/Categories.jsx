import React from 'react';

import { Link } from 'react-router';

import classes from './Categories.module.css';
import productImg1 from '../../assets/product_1.png';
import productImg2 from '../../assets/product_2.png';
import productImg3 from '../../assets/product_3.png';
import productImg4 from '../../assets/product_4.png';
import productImg5 from '../../assets/product_5.png';

function Categories() {
  return (
    <section id="categories" className={classes.categories}>
      <div className="container">
        <p className={classes.subTitle}>Carefully create collections</p>
        <h2 className={classes.title}>Browse our categories</h2>
        <div className={classes.wrapper}>
          <div>
            <Link to="/shop">
              <img src={productImg1} alt="product-1" />
            </Link>
          </div>
          <div>
            <Link to="/shop">
              <img src={productImg2} alt="product-2" />
            </Link>
          </div>
          <div>
            <Link to="/shop">
              <img src={productImg3} alt="product-3" />
            </Link>
          </div>
          <div>
            <Link to="/shop">
              <img src={productImg4} alt="product-4" />
            </Link>
          </div>
          <div>
            <Link to="/shop">
              <img src={productImg5} alt="product-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
