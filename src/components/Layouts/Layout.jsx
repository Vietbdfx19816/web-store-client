import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import NavBar from './NavBar/Navbar';
import LiveChat from './Chat/LiveChat';

function Layout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <LiveChat />
      <Footer />
    </Fragment>
  );
}

export default Layout;
