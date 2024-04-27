
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
import AllTourist from './components/AllSpot/AllTourist';
import AddSpot from './components/AddSpot/AddSpot';
import MyList from './components/MyList/MyList';
import ViewDetails from './components/ViewDetails/ViewDetails';
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
      {
        path: '/allTourist',
        element: <AllTourist></AllTourist>,
        loader: ()=> fetch('http://localhost:5000/addSpot')
      },
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
      //   element:
      // },
    
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
       
      },
      {
        path: '/myList',
        element: <PrivateRoute> <MyList></MyList> </PrivateRoute>
       
      },
      {
        path: '/addSpot',
        element: <PrivateRoute> <AddSpot></AddSpot> </PrivateRoute>,
       
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute> <ViewDetails></ViewDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/addSpot/${params.id}`)
      },

      // {
      //   path: "/updated/:id",
      //   element: <UpdatedCoffee></UpdatedCoffee>,
      //   loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      // },
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

