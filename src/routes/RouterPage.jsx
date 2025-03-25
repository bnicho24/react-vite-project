import React from 'react'

import Login from '@/components/utility/Login';
import Dashboard from '@/pages/Dashboard';
import { Navigate, useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import MainWrapper from '@/layout/MainWrapper';
import Services from '@/pages/Services';
import ContactUs from '@/pages/ContactUs';
import Profile from '@/pages/Profile';
import Portfolio from '@/pages/Portfolio';
import NotFound from '@/pages/NotFound';
const RouterPage = () => {
  return useRoutes([
    {
        path: '/',
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
        {
        path: 'main', 
        element: <MainWrapper />,
        children: [
            {
                path: 'dash', 
                element: <Dashboard />,
    
            },
            {
                path: 'home',
                element: <Home />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'portfolio',
                        element: <Portfolio />
                    },
                ]
            },
            {
                path: 'services', 
                element: <Services />,
            },
            {
                path: 'contactus',
                element: <ContactUs />,
            },
            ],
        },
        {
            path: '404',
            element: <><NotFound /></>,

        },
    ]);
}

export default RouterPage