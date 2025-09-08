
import React from "react";
import { motion } from "framer-motion";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import '../css/_About.scss';

export default function About() {

    const images = [
      '../img/vue-logo.png',
      '../img/vuetify-logo.png',
      '../img/react-logo.png',
      '../img/html-logo.png',
      '../img/bootstrap-logo.png',
      '../img/js-logo.png',
      '../img/scss-logo.png',
      '../img/ts-logo.png',
      '../img/ae-logo.png',
      '../img/premiere-logo.png',
      '../img/figma-logo.png',
    ];
  
  return (
    <section className="about-section py-5" id="about">
      <Container>
        {/* 제목 */}
        <Col lg={9} md={6} className="title-wrap">
          <motion.h1
            className="mb-5 title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <strong>About Me</strong>
          </motion.h1>
        </Col>
        {/* 그리드 레이아웃 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Row className="d-flex justify-content-center align-items-center">
            {/* 프로필 이미지 */}
           <Col lg={2} md={6}>
              <motion.img
                  src="../img/me.jpg"
                  alt="Profile"
                  className="img-fluid rounded "
                  whileHover={{ scale: 1.05 }}
                />
            </Col>

            {/* 자기소개 카드 */}
            <Col lg={7} md={6}>
              <div className="intro-wrapper ">
                <h2 className="h2">KIM KITAE</h2>
                  <h5 className="py-3 line-height">
                    사람들과의 소통을 중요하게 생각하는 
                    프론트엔드 개발자 지망생입니다.<br/>React와 Vutify 기술을 활용해 
                    따뜻하고 직관적인 경험을 만드는 것을 좋아합니다.
                  </h5>
                  
                  {/* SNS 버튼 */}
                  <div className="d-flex gap-2 mt-3">
                    <Button
                      variant="outline-primary"
                      href="https://github.com/yourname"
                      target="_blank"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outline-info"
                      href="https://linkedin.com/in/yourname"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="mailto:youremail@gmail.com"
                    >
                      Email
                    </Button>
                  </div>
                
              </div>
            </Col>
              
            <Col lg={9} md={6} className="char-wrapper py-3">
              <hr />
              <h3 className="mt-5 mb-5"><strong>Character</strong></h3>
              <div className="char-nav">
                <div className="menu ">
                  <h5 className="menu-item">Responsibility</h5>
                  <h6 className="desc">어떠한 상황이 닥치더라도 맡은 바 책임을 지고 최선을 다해 완수합니다 </h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Team Spirit</h5>
                  <h6 className="desc">팀원들을 존중하고 배려하며 원만한 관계를 유지하여 최선의 결과를 창출합니다</h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Creativity</h5>
                  <h6 className="desc">다양한 분야의 지식 습득 및 일상 관찰, 문제 재해석등을 통한 창의적인 아이디어를 이끕니다</h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Passion</h5>
                  <h6 className="desc">일에 대한 애정과 목표를 끊임없이 되뇌며 뜨거운 열정으로 업무에 매진합니다</h6>
                </div>
              </div>
            </Col>
            <Col lg={9} md={6} >
              <div className="skill-wrap">
                <h3><strong className="text-align ">Skill</strong></h3>
                  <div className="skill-mark mt-3">
                    {images.map((src, index) => (
                      <motion.img 
                        key={index}
                        src={src}
                        alt={`img-${index}`}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }} />
                      ))}
                  </div>
              </div>
            </Col>
            

            
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import '../css/_About.scss';

export default function About() {

    const images = [
      '../img/vue-logo.png',
      '../img/vuetify-logo.png',
      '../img/react-logo.png',
      '../img/html-logo.png',
      '../img/bootstrap-logo.png',
      '../img/js-logo.png',
      '../img/scss-logo.png',
      '../img/ts-logo.png',
      '../img/ae-logo.png',
      '../img/premiere-logo.png',
      '../img/figma-logo.png',
    ];
  
  return (
    <section className="about-section py-5" id="about">
      <Container>
        {/* 제목 */}
        <Col lg={9} md={6} className="title-wrap">
          <motion.h1
            className="mb-5 title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <strong>About Me</strong>
          </motion.h1>
        </Col>
        {/* 그리드 레이아웃 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Row className="d-flex justify-content-center align-items-center">
            {/* 프로필 이미지 */}
           <Col lg={2} md={6}>
              <motion.img
                  src="../img/me.jpg"
                  alt="Profile"
                  className="img-fluid rounded "
                  whileHover={{ scale: 1.05 }}
                />
            </Col>

            {/* 자기소개 카드 */}
            <Col lg={7} md={6}>
              <div className="intro-wrapper ">
                <h2 className="h2">KIM KITAE</h2>
                  <h5 className="py-3 line-height">
                    사람들과의 소통을 중요하게 생각하는 
                    프론트엔드 개발자 지망생입니다.<br/>React와 Vutify 기술을 활용해 
                    따뜻하고 직관적인 경험을 만드는 것을 좋아합니다.
                  </h5>
                  
                  {/* SNS 버튼 */}
                  <div className="d-flex gap-2 mt-3">
                    <Button
                      variant="outline-primary"
                      href="https://github.com/yourname"
                      target="_blank"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outline-info"
                      href="https://linkedin.com/in/yourname"
                      target="_blank"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline-secondary"
                      href="mailto:youremail@gmail.com"
                    >
                      Email
                    </Button>
                  </div>
                
              </div>
            </Col>
              
            <Col lg={9} md={6} className="char-wrapper py-3">
              <hr />
              <h3 className="mt-5 mb-5"><strong>Character</strong></h3>
              <div className="char-nav">
                <div className="menu ">
                  <h5 className="menu-item">Responsibility</h5>
                  <h6 className="desc">어떠한 상황이 닥치더라도 맡은 바 책임을 지고 최선을 다해 완수합니다 </h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Team Spirit</h5>
                  <h6 className="desc">팀원들을 존중하고 배려하며 원만한 관계를 유지하여 최선의 결과를 창출합니다</h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Creativity</h5>
                  <h6 className="desc">다양한 분야의 지식 습득 및 일상 관찰, 문제 재해석등을 통한 창의적인 아이디어를 이끕니다</h6>
                </div>

                <div className="menu">
                  <h5 className="menu-item">Passion</h5>
                  <h6 className="desc">일에 대한 애정과 목표를 끊임없이 되뇌며 뜨거운 열정으로 업무에 매진합니다</h6>
                </div>
              </div>
            </Col>
            <Col lg={9} md={6} >
              <div className="skill-wrap">
                <h3><strong className="text-align ">Skill</strong></h3>
                  <div className="skill-mark mt-3">
                    {images.map((src, index) => (
                      <motion.img 
                        key={index}
                        src={src}
                        alt={`img-${index}`}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }} />
                      ))}
                  </div>
              </div>
            </Col>
            

            
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

