import React from 'react';

import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../store/popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Modal from '../UI/Modal';
import classes from './ProductPopup.module.css';

function ProductPopup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currProduct = useSelector(state => state.popup.product);

  // hidden when there are no product to render
  if (!currProduct) {
    return null;
  }

  const viewDetailHandler = () => {
    dispatch(hidePopup());
    navigate(`/detail/${currProduct._id}`);
  };

  const closePopupHandler = () => {
    dispatch(hidePopup());
  };

  return (
    <Modal onClose={closePopupHandler}>
      <div className={classes.image}>
        <img src={currProduct.img1} alt={currProduct.name} />
      </div>
      <div className={classes.detail}>
        <h2>{currProduct.name}</h2>
        <p className={classes.price}>{`${currProduct.price.toLocaleString(
          'de-DE'
        )} VND`}</p>
        <p className={classes.description}>{currProduct.short_desc}</p>

        <div className="btn" onClick={viewDetailHandler}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>View Detail</span>
        </div>
      </div>
    </Modal>
  );
}
export default ProductPopup;
