import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layout/HomeLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SkillCard from '../pages/SkillCard';
import SkillDetails from '../pages/SkillDetails';
import PrivateRoute from '../providers/PrivateRoute';

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
    element: <SkillCard></SkillCard>,
  },
  {
    path: '/skill-details/:skillId',
    element: (
      <PrivateRoute>
        <SkillDetails></SkillDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/Skill.json'),
  },
  {
    path: '/*',
    element: <h2>Thia is Error 404</h2>,
  },
]);

export default router;
