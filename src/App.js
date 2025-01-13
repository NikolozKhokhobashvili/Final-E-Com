import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Product from './Pages/Product'
import CarTab from './components/CarTab';
import Listing from './Pages/Listing'
import CartPage from './Pages/CartPage'
import AfterPaymentSuccess from './Pages/AfterPaymentSuccess'
import PaymentFailed from './Pages/PaymentFailed'
import Checkout from './Pages/Checkout'
import Authantication from './Pages/Authantication'


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/product/:userid' element={<Product />}/>
        <Route path='/List' element={<Listing/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/paymentsuccess' element={<AfterPaymentSuccess/>}/>
        <Route path='/paymentfailed' element={<PaymentFailed/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/authantication' element={<Authantication/>}/>
      </Routes>
      
      <CarTab/>
    </div>
  )
}

export default App;
