import React, { useEffect, useState } from 'react';

import classes from './ShopSearchForm.module.css';
import { useSearchParams } from 'react-router';

function ShopSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keywordInput, setKeywordInput] = useState('');
  const [keywordTouched, setKeywordTouched] = useState(false);

  const sorting = searchParams.get('sorting') || '';

  useEffect(() => {
    if (!keywordTouched) {
      return;
    }

    if (keywordTouched && !keywordInput) {
      const delay = setTimeout(() => {
        setSearchParams(params => {
          params.delete('keyword');
          return params;
        });
      }, 1000);

      return () => {
        clearTimeout(delay);
      };
    }

    if (keywordTouched && keywordInput) {
      const delay = setTimeout(() => {
        setSearchParams(params => {
          params.set('keyword', keywordInput);
          return params;
        });
      }, 1000);

      return () => {
        clearTimeout(delay);
      };
    }
  }, [keywordTouched, keywordInput, setSearchParams]);

  const sortingHandler = e => {
    const value = e.target.value;

    if (value) {
      setSearchParams(params => {
        params.set('sorting', value);
        return params;
      });
    } else {
      setSearchParams(params => {
        params.delete('sorting');
        return params;
      });
    }
  };

  return (
    <div className={classes.form}>
      <input
        id="keyword"
        type="text"
        placeholder="Enter Search Here"
        value={keywordInput}
        onChange={e => {
          setKeywordTouched(true);
          setKeywordInput(e.target.value.trim());
        }}
      />
      <select name="sorting" defaultValue={sorting} onChange={sortingHandler}>
        <option value="">Sort by price</option>
        <option value="asc">Price increase</option>
        <option value="desc">Price decrease</option>
      </select>
    </div>
  );
}

export default ShopSearchForm;
