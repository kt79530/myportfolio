
import React from "react";
import { motion } from "framer-motion";
import { Accordion, Container, Row, Col, Card, Button } from "react-bootstrap";
import '../css/_About.scss';

export default function About() {

    const images = [
      `${process.env.PUBLIC_URL}/img/react-logo.png`,
      `${process.env.PUBLIC_URL}/img/vue-logo.png`,
      `${process.env.PUBLIC_URL}/img/vuetify-logo.png`,
      `${process.env.PUBLIC_URL}/img/html-logo.png`,
      `${process.env.PUBLIC_URL}/img/ts-logo.png`,
      `${process.env.PUBLIC_URL}/img/js-logo.png`,
      `${process.env.PUBLIC_URL}/img/bootstrap-logo.png`,
      `${process.env.PUBLIC_URL}/img/scss-logo.png`,
      `${process.env.PUBLIC_URL}/img/figma-logo.png`,
      `${process.env.PUBLIC_URL}/img/ae-logo.png`,
      `${process.env.PUBLIC_URL}/img/premiere-logo.png`,
    ];
  
  return (
    <section className="about-section py-5" id="about">
      <Container>
        {/* 제목 */}
        <Col lg={9} md={6} sm={12} className="title-wrap">
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
           <Col lg={4} md={12} sm={12} className="d-flex align-items-center justify-content-center">
              <motion.img
                  src={`${process.env.PUBLIC_URL}/img/me.jpg`}
                  alt="Profile"
                  className="img-fluid rounded "
                  whileHover={{ scale: 1 }}
                />
            </Col>

            {/* 자기소개 카드 */}
            <Col lg={7} md={12} sm={12}  className="">
              <div className="intro-wrapper ">
                <h2 className="h2">KIM KITAE</h2>
                  <h5 className="py-3 line-height">
                    사람들과의 소통을 중요하게 생각하는 
                    프론트엔드 개발자 지망생입니다.<br/>React와 Vutify 기술을 활용해 
                    따뜻하고 직관적인 경험을 만드는 것을 추구합니다.
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
                      variant="outline-danger"
                      href="mailto:youremail@gmail.com"
                    >
                      Email
                    </Button>
                  </div>
                
              </div>
            </Col>
              
            <Col lg={9} md={12} sm={12} 
                className="char-wrapper py-3">
              <hr />
              <div className="mt-5 mb-5">
                <h3><strong>Character</strong></h3></div>
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
            <Col lg={9} md={12} sm={12} >
              <div className="skill-wrap">
                <h3><strong className="text-align ">Skill</strong></h3>
                  <div className="sliger-container mt-3">
                    <motion.div 
                        className="slider"
                        animate={{x:["0%", "-50%"]}}
                        transition={{ 
                          duration: 20, 
                          repeat:Infinity,
                          ease:"linear"
                        }}>
                          {[...images, ...images, ...images].map((src, i) => (
                            <img 
                              src={src}
                              alt={`logo-${1}`}
                              key={i} 
                              className="slider-img"/>
                          ))}
                      </motion.div>
                    
                  </div>
              </div>
            </Col>
        

            
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}



