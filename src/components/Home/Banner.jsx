import React from 'react';
import { Link } from 'react-router';
import imgBanner from '../../assets/banner1.jpg';

import classes from './Banner.module.css';
function Banner() {
  return (
    <header className={classes.banner}>
      <img className={classes.bannerBg} src={imgBanner} alt="store banner" />
      <div className={`${classes.wrapper} centered`}>
        <div className={classes.promotion}>
          <p className={classes.subTitle}>New inspiration 2020</p>
          <h1>20% off on new season</h1>
          <Link to="/shop">
            <div className="btn">Browse collections</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Banner;
