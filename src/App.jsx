import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import AllProducts from './pages/AllProducts';
import BrandProducts from './pages/BrandProducts';
import { useCart } from './context/CartContext';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/nike" element={<BrandProducts brand="nike" />} />
            <Route path="/adidas" element={<BrandProducts brand="adidas" />} />
            <Route path="/vans" element={<BrandProducts brand="vans" />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
