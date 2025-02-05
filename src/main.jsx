
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
import AuthProvider from './Providers/AuthProvider';
import AllTourist from './components/AllSpot/AllTourist';
import AddSpot from './components/AddSpot/AddSpot';
import MyList from './components/MyList/MyList';
import ViewDetails from './components/ViewDetails/ViewDetails';
import About from './components/About/About';
import UpdatedSpot from './components/UpdatedSpot/UpdatedSpot';
import AllCountry from './components/AllCountry/AllCountry';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://assignment-10-server-tan-sigma.vercel.app/addSpot')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/allTourist',
        element: <AllTourist></AllTourist>,
        loader: ()=> fetch('https://assignment-10-server-tan-sigma.vercel.app/addSpot')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <PrivateRoute>  <About></About> </PrivateRoute>
       
      },
      {
        path: '/myList',
        element: <PrivateRoute> <MyList></MyList> </PrivateRoute>,
      },
    
      {
        path: "/updated/:id",
        element: <UpdatedSpot></UpdatedSpot>,
        loader: ({params}) => fetch(`https://assignment-10-server-tan-sigma.vercel.app/addSpot/${params.id}`)
      },
      {
        path: '/addSpot',
        element: <PrivateRoute> <AddSpot></AddSpot> </PrivateRoute>,
       
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoute> <ViewDetails></ViewDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-10-server-tan-sigma.vercel.app/addSpot/${params.id}`)
      },
      {
        path: '/allCountry/:id',
        element: <PrivateRoute> <AllCountry></AllCountry> </PrivateRoute>,
        loader : ({params})=> fetch(`https://assignment-10-server-tan-sigma.vercel.app/countries/${params.id}`)
      },
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

