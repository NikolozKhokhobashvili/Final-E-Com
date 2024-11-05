import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiscountHeader from './components/DiscountHeader'
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'
import Product from './Pages/Product'
import CarTab from './components/CarTab';


function App() {
  return (
    <div>

      <DiscountHeader />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:userid' element={<Product />}></Route>
      </Routes>
      
      <CarTab/>
      <Footer/>
    </div>
  )
}

export default App;
