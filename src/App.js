import './App.css';
import Search from './components/search';
import {CartProvider} from "react-use-cart";
import Cart from './components/Cart';
import Order from './components/order';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {  

  return (
    <Router>
    <CartProvider>
      <Routes>
      <Route path="/" exact element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<Order/>}/>
      </Routes>
    </CartProvider>
    </Router>

  )
}

export default App;

