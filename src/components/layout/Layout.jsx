import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollButton from '../ScrollTopButton';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <div className="mx-auto max-w-[1240px] ">
          <Outlet />
        </div>
        <ScrollButton />

      </div>
      <Footer />
    </>
  );
}

export default Layout;
