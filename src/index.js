import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//컴포넌트 호출
import './index.css';
import App from './App';

import Home from './components/Home';
import About from './components/About';
import NavLayout from './components/NavLayout';
import Works from './components/Works';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
          <Route path="navlayout" element={<NavLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route index element={<Home />} />
          </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>  
  
);



