import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigatioBar from './Components/Navigatiobar';
import CategorySec from '../User/Pages/CategorySec';
import Home from '../User/Pages/Home';
import Products from './Pages/Products';
import ProductPages from './Pages/ProductPages'
import CategoryProduct from './Pages/CategoryProduct';// Make sure to import the correct path for CategoryProduct
import LoginForm from '../Guest/form/LoginForm';
import FooterSection from '../Components/FooterSection';
import UserProfile from './Pages/UserProfile';

function Index() {
  return (
    <>
      <NavigatioBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategorySec />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:_id" element={<ProductPages />} />
        <Route path="/userprofile" element={<UserProfile />} />
  
        <Route path="/products/category/:CategoryName" element={<CategoryProduct />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <FooterSection/>
    </>
  );
}

export default Index;
