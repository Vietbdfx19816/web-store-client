import React from 'react';

import classes from './ShopNavigation.module.css';
import { useSearchParams } from 'react-router';

function ShopNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || '';

  const selectCategoryHandler = e => {
    const value = e.target.dataset.category;
    if (value) {
      setSearchParams(params => {
        params.set('category', value);
        return params;
      });
    } else {
      setSearchParams(params => {
        params.delete('category');
        return params;
      });
    }
  };

  return (
    <nav className={classes.sideNav} onClick={selectCategoryHandler}>
      <h2>Categories</h2>
      <p>Apple</p>
      <ul>
        <li data-category="" className={category === '' ? classes.active : ''}>
          All
        </li>
      </ul>
      <p>iPhone & iMac</p>
      <ul>
        <li
          data-category="iphone"
          className={category === 'iphone' ? classes.active : ''}
        >
          iPhone
        </li>
        <li
          data-category="ipad"
          className={category === 'ipad' ? classes.active : ''}
        >
          iPad
        </li>
        <li
          data-category="macbook"
          className={category === 'macbook' ? classes.active : ''}
        >
          Macbook
        </li>
      </ul>
      <p>Wireless</p>
      <ul>
        <li
          data-category="airpod"
          className={category === 'airpod' ? classes.active : ''}
        >
          Airpod
        </li>
        <li
          data-category="watch"
          className={category === 'watch' ? classes.active : ''}
        >
          Watch
        </li>
      </ul>
      <p>Other</p>
      <ul>
        <li
          data-category="mouse"
          className={category === 'mouse' ? classes.active : ''}
        >
          Mouse
        </li>
        <li
          data-category="keyboard"
          className={category === 'keyboard' ? classes.active : ''}
        >
          Keyboard
        </li>
        <li
          data-category="other"
          className={category === 'other' ? classes.active : ''}
        >
          Other
        </li>
      </ul>
    </nav>
  );
}

export default ShopNavigation;
