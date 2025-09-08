<<<<<<< HEAD
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

import '../src/App.css';


export default function App(){
  return(
    <>
    <main className="content">
       {/*navigation */}
      <div className="app-container">
        <NavLayout />
      </div>    
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

=======
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

import '../src/App.css';


export default function App(){
  return(
    <>
    <main className="content">
       {/*navigation */}
      <div className="app-container">
        <NavLayout />
      </div>    
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

>>>>>>> cf6b372028391d8d2075873f9280ff29f1d7d9c1
