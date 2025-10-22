import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/skill',
    element: <h2>Skill details layout</h2>,
  },
  {
    path: '/*',
    element: <h2>Thia is Error 404</h2>,
  },
]);

export default router;
