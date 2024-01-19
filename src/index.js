import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Stars from './components/home/Home';
import Register from './components/pages/register/Register';

import {
  createBrowserRouter, RouterProvider} from "react-router-dom";
  import Login from './components/pages/login/Login';
  
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },

    {
      path: "/Home",
      element: <App/>
    },

    {
      path: "/Login",
      element: <Login/>
    },

    {
      path: "/Register",
      element: <Register/>
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router = {router} />
   
  </React.StrictMode>
);

