import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PC from './components/computer/Pc';
import Footer from './components/Footer/Footer';
import DiscoverCard from './components/discover/Discover.jsx';


function App  ()  {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <PC />
      
        <DiscoverCard/>
        
      </main>
   
      <Footer />
    </>
  );
}

export default App;
