import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe os componentes do react-router-dom
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Rdr2 from './components/pages/PagesGames/Rdr2/Rdr2';
import ErrorPage from './components/Routes/ErrorPage';
import Stars from './components/home/Home';
import SearchResults from './components/searchBar/SearchResults';
import CartPage from './components/cart/CartPage';
import { ShopContextProvider } from './components/context/shop-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Destaques" element={<Stars />} />
          <Route path="/Home" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/game/1" element={<Rdr2 />} />
          <Route path="/search/:term" element={<SearchResults />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
