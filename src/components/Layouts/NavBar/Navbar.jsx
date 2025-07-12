import React from 'react';

import { Link, NavLink } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbed,
  faClockRotateLeft,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../store/auth';

function NavBar() {
  const auth = useSelector(state => state.auth);
  const user = auth?.user;
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav id="navBar" className={classes.navBar}>
      <div className="container">
        <h2 className={`${classes.navBrand} centered`}>
          <Link to="/">BOUTIQUE</Link>
        </h2>
        <ul className={classes.navBarNav}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : '')}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : '')}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/order"
              >
                <FontAwesomeIcon icon={faClockRotateLeft} />
                History
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/cart"
              >
                <FontAwesomeIcon icon={faCartFlatbed} />
                Cart
              </NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : '')}
                to="/auth"
              >
                <FontAwesomeIcon icon={faUser} />
                Login
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <FontAwesomeIcon icon={faUser} />
              <span>{user.username}</span>
              {' ('}
              <span className={classes.logout} onClick={logOut}>
                Logout
              </span>
              {')'}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
