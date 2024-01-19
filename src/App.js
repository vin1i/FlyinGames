import React from "react";
import AppRoutes from "./components/routes/route";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PC from "./components/computer/Pc";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return ( 
    
    <>
    
  
    <Header/>

    <main className="main">
      <Home/>
      <PC/>
      </main> 
    <Footer />


    
    </>

    
  );
};
export default App;