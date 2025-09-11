import React from "react";
import {Container, Row, Col} from "react-bootstrap";
// components/Home.jsx
import '../css/Home.css';

function Home() {
  return (
    
    <section className="home" id="home">
     
      <div className="home__content">
        <h1 className="home__title">안녕하세요. 곧 Front-End 퍼블리셔 김기태입니다.</h1>
        <p className="home__subtitle">Pixel-perfect, accessible, and responsive web interfaces.</p>

        <div className="home__buttons">
          <a href="/Works" className="btn primary">View My Work</a>
          <a href="/About" className="btn secondary">About Me</a>
        </div>
      </div>

      
    </section>
  );
}

export default Home;