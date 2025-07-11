import React from "react";
import { Routes, Route } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

import '../src/App.css';


export default function App(){
  return(
    <>
    <div className="app-container">
      <NavLayout />
    </div>
      <main className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}