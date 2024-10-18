import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import logo from "./imges/logo-c.png";
import moon from "./imges/moon.png";
import basket from "./imges/basket.png";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Card from './pages/Card';
import Detailes from './pages/Detailes';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [products, setProducts] = useState([]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const addProductToCard = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  return (
    <div className='bg-white'>
      <header className='bg-blue-950'>
        <div className='p-2 container max-w-[1440px] text-white flex justify-end gap-5 px-16'>
          <Link to="/register" className='hover:text-blue-300'>Create Account</Link>
          <Link to="/login" className='hover:text-blue-300'>Sign in / Guest</Link>
        </div>
      </header>

      <nav className='bg-slate-200 border-3 p-4 rounded-md container mx-auto flex items-center justify-between'>
        <Link to="/">
          <img src={logo} alt="logo-img" className='w-14' />
        </Link>
        <div className='flex gap-5 text-black items-center'>
          {['/', '/about', '/products', '/card'].map((path) => (
            <Link 
              key={path}
              to={path}
              className={`p-3 rounded-xl ${activeLink === path ? 'bg-blue-950 text-white' : 'bg-white text-black'}`}
              onClick={() => handleLinkClick(path)}
            >
              {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
        <div className='flex gap-5 items-center'>
          <img src={moon} alt="moon" className='w-5 h-5 cursor-pointer' />
          <Link to="/card">
            <img src={basket} alt="basket" className='w-8 cursor-pointer' />
          </Link>
        </div>
      </nav>

      <main className='container mx-auto mt-[80px]'>
        <Routes>
          <Route path='/' element={<Home setActiveLink={setActiveLink} />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/card' element={<Card products={products} />} />
          <Route 
            path='/products/:id' 
            element={<Detailes addProductToCard={addProductToCard} />} 
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
