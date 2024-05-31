import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Products from './components/shop/products/Products';  
// import LoginPage from './components/account/login/LoginPage';
// import Profile from './components/account/profile/Profile';
import Home from './components/general/Home';
import LoginPage from './components/account/login/LoginPage';
import Register from './components/account/register/Register';
import Profile from './components/account/profile/Profile';
import Cart from './components/shop/cart/Cart';
import Shop from './components/shop/shop/Shop';
import ProductDetail from './components/shop/productDetail/ProductDetail';
import Payment from './components/shop/payment/Payment';
import Order from './components/shop/order/Order';
import BlogPage from './components/blogs/BlogPage';
import Wizard from './components/random/Wizard';

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/order' element={<Order />} />
            <Route path='/blogs' element={<BlogPage />} />
            <Route path='/giftr' element={<Wizard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
