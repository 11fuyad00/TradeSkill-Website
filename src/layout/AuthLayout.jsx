import React from 'react';
import Login from '../pages/Login';
import Navber from '../component/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
