import React from 'react';
import Checkout from './components/Checkout/Checkout';
import DisplayContent from './components/DisplayContent/DisplayContent';
import MainPage from './components/HomePage/MainPage';
import Navbar from './components/NavBar/Navigation';
import Placeorder from './components/PlaceOrder/Placeorder';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/CartContext';
import OrderLogs from './components/NavBar/OrderLogs';

function App() {
  return (
    
    <div className="App">
    
  <BrowserRouter>
  <CartContextProvider>
  <Navbar />
   <Routes>
   <Route path='/display' element={<DisplayContent />}></Route>
   <Route path='/order/:id' element={<Placeorder/>}></Route>
   <Route path='/checkout' element={<Checkout/>}></Route>  
   <Route path='/orderlogs' element={<OrderLogs />}></Route> 
   <Route path='' element={<MainPage />}></Route>
  
  </Routes>
  </CartContextProvider>
  </BrowserRouter>
   </div>
  
  );
}

export default App;
