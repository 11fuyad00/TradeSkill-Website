import React from 'react';
import Home from '../pages/Home';
import Footer from '../pages/Footer';
import Navber from '../component/Navber';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>

      <main>
        <Home></Home>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
