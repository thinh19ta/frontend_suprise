import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/header/Header';
import Products from './components/shop/products/Products';  
import LoginPage from './components/account/login/LoginPage';
import Profile from './components/account/profile/Profile';
import ProductDetail from './components/shop/productDetail/ProductDetail';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/' element={<Products />} />

        </Routes>
      </BrowserRouter> */}
      {/* <LoginPage /> */}
      {/* <Profile /> */}
      {/* <Header /> */}
      <ProductDetail />
    </div>
  );
}

export default App;
