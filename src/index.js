import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Welcome from './components/Welcome';
import App from './App';
import NavLayout from './components/NavLayout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      
      <Route path="/*" element={<App />} />
      
    </Routes>
  </BrowserRouter>
  
);



