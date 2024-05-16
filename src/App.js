import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Products from './components/shop/products/Products';  
// import LoginPage from './components/account/login/LoginPage';
// import Profile from './components/account/profile/Profile';
// import ProductDetail from './components/shop/productDetail/ProductDetail';
import Carousel from './components/layouts/Carousel';
import Home from './components/general/Home';
import LoginPage from './components/account/login/LoginPage';
import Register from './components/account/register/Register';
import Profile from './components/account/profile/Profile';
import Cart from './components/shop/cart/Cart';
import Shop from './components/shop/shop/Shop';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Shop' element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
