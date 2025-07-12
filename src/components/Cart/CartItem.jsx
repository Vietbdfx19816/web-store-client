import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretLeft,
  faCaretRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

function CartItem(props) {
  const dispatch = useDispatch();
  console.log(props);

  const inputHandler = e => {
    const value = Number(e.target.value);
    if (!value || value <= 0) return;

    dispatch(cartActions.add({ id: props.id, amount: value }));
  };

  const increaseHandler = e => {
    const value = props.amount;
    if (!value) return;

    dispatch(cartActions.add({ id: props.id, amount: 1 }));
  };

  const decreaseHandler = e => {
    const value = props.amount;
    if (!value || value === 1) return;

    dispatch(cartActions.add({ id: props.id, amount: -1 }));
  };

  const removeHandler = e => {
    dispatch(cartActions.remove(props.id));
  };

  return (
    <tr className={classes.itemRow}>
      <td className={classes.image}>
        <img src={props.image} alt={props.name} />
      </td>
      <td className={classes.name}>{props.name}</td>
      <td className={classes.price}>{`${props.price.toLocaleString(
        'de-DE'
      )} VND`}</td>
      <td className={classes.quantity}>
        <div>
          <FontAwesomeIcon icon={faCaretLeft} onClick={decreaseHandler} />
          <input
            type="text"
            id={props.id}
            value={props.amount}
            onChange={inputHandler}
          />
          <FontAwesomeIcon icon={faCaretRight} onClick={increaseHandler} />
        </div>
      </td>
      <td className={classes.total}>{`${(
        props.price * props.amount
      ).toLocaleString('de-DE')} VND`}</td>
      <td className={classes.remove}>
        <FontAwesomeIcon icon={faTrashCan} onClick={removeHandler} />
      </td>
    </tr>
  );
}

export default CartItem;
