import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';
import NavBar from './NavBar';
import MainContent from '../main/MainContent';

function Layout({ children }) {
  return (
    <div className="container px-5 mx-auto lg:px-24">
      <MainHeader />
      <NavBar />

      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
