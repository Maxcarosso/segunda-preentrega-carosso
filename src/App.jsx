import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { NotificationProvider } from './components/Notification/Notification';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import AllProducts from './pages/AllProducts';
import CategoryProducts from './pages/CategoryProducts';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.css';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <SearchBar />
            <NotificationProvider />
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/category/:categoryId" element={<CategoryProducts />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
