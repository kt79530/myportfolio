import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
// components/Home.jsx
import '../css/Home.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col className="home" lg={12} md={9} sm={12}>
          <div className="home__content">
            <h1 className="home__title">안녕하세요.<br/>곧 Front-End 퍼블리셔 김기태입니다.</h1>
            <p className="home__subtitle">Pixel-perfect, accessible, and responsive web interfaces.</p>

            <div className="home__buttons">
              <Link to="/Works" className="btn primary">View My Work</Link>
              <Link to="/About" className="btn secondary">About Me</Link>
            </div>
          </div>
       </Col>
      </Row>
    </Container>
  );
}

export default Home;