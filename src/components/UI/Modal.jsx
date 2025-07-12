import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.action} onClick={props.onClick}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Selecting portal location
const portalElement = document.getElementById('overlay');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>
          {props.children}
          {/*passing children from Modal to ModelOverlay*/}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
