import React, {useEffect} from 'react';
import { Accordion,Container, Row, Col } from "react-bootstrap";
import '../css/_About.scss';
import NavLayout from "./NavLayout";
import AOS from "aos"
import 'aos/dist/aos.css';

function About() {

    useEffect(()=>{
        AOS.init({
            duration:500,
            once:true,
        });
    }, []);
    return(
        <>
        <Container  >
            <Row className="about-align">
               <Col lg={10} md={12} sm={12} data-aos="fade-up">
                <div className="title">About Me</div>
               </Col> 
                       
                <Col lg={3} md={6} sm={12} data-aos="fade-up">
                <Accordion defaultActiveKey='0' >
                    <Accordion.Item eventKey="0" className="mb">
                        <Accordion.Header className="">
                            <div className="acc-img1 img-after"></div>
                        </Accordion.Header>
                        <Accordion.Body>
                            어떠한 상황이 닥치더라도 맡은 바 책임을 지고 최선을 다해 완수합니다 
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col lg={3} md={6} sm={12} data-aos="fade-down">
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey="1" className="mb">
                        <Accordion.Header>
                            <div className="acc-img2 img-after1"/>
                        </Accordion.Header>
                        <Accordion.Body>
                            팀원들을 존중하고 배려하며 원만한 관계를 유지하여 최선의 결과를 창출합니다 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col lg={3} md={6} sm={12} data-aos="fade-up" >
                <Accordion defaultActiveKey='0' >
                    <Accordion.Item eventKey="1" className="mb">
                        <Accordion.Header>
                            <div className="acc-img3 img-after2"/>
                        </Accordion.Header>
                        <Accordion.Body>
                            다양한 분야의 지식 습득 및 일상 관찰, 문제 재해석등을 통한 창의적인 아이디어를 이끕니다
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col lg={3} md={6} sm={12} data-aos="fade-down">
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey="1" className="mb">
                        <Accordion.Header>
                            <div className="acc-img4 img-after3"/>
                        </Accordion.Header>
                        <Accordion.Body>
                            일에 대한 애정과 목표를 끊임없이 되뇌며 뜨거운 열정으로 업무에 매진합니다 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>

                <Col lg={12}>
                <h1><strong>Skill</strong></h1>
                <div className='skill-icon'>
                    <img src='/img/vscodeicon.png'/>
                    <img src='/img/HTML5_logo.png'/>
                    <img src='/img/React-icon.png'/>
                    <img src='/img/Vue.png'/>
                    <img src='/img/Bootstrap_logo.png'/>
                    <img src='/img/figmalogo.png'/>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default About;