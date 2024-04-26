
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import PrivateRoute from './Providers/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';

import Root from './components/root/Root';
import Home from './components/Home/Home';
import Login from './components/Owner/Login';
import Register from './components/Owner/Register';
import Profile from './components/Profile/Profile';
import AuthProvider from './Providers/AuthProvider';
import Contact from './components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
        // loader: () => fetch('/Land.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: '/location',
      //   element: <Location></Location>
      // },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      // {
      //   path: '/about',
      //   element: <About></About>
      // },
    
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
       
      },
      // {
      //   path: '/Land/:id',
      //   element: <PrivateRoute><LandDetails></LandDetails></PrivateRoute>,
      //   loader: () => fetch('/Land.json')
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)

