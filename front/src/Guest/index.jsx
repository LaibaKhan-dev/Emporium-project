import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../User/Pages/Home';
import CategorySec from '../User/Pages/CategorySec';
import Products from '../User/Pages/Products';
import LoginForm from './form/LoginForm';
import Navigation from './Components.jsx/Navigation';
import FooterSection from '../User/Components/FooterSection';

export default function Guest() {

  return (
    <>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/CategorySec" element={<CategorySec />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<Navigate to="/" replace={true}/>} />
      </Routes>
      <FooterSection />
    </>
  );
}





