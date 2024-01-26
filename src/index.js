import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Rdr2 from './components/pages/PagesGames/Rdr2/Rdr2';
import ErrorPage from './components/Routes/ErrorPage';
import Stars from './components/home/Home';
import SearchResults from './components/searchBar/SearchResults';
//import PC from './components/computer/Pc';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage/>,
    element: <App />,
  },
  {
    path: '/Destaques',
    element: <Stars />,
  },
  {
    path: '/Home',
    element: <App />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },

  {
    path: '/game/1',
    element: <Rdr2/>,
  },

  {
    path: '/search/:term',
    element: <SearchResults/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  
  </React.StrictMode>
);
