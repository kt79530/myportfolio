import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import '../css/_Works.scss';
import '../css/Font.scss';
import VideoSource from '../img/work-video.mp4';

const Works = () =>{

    useEffect(() => {
        document.body.style.backgroundColor = "#000000"

        return () => {
            document.body.style.backgroundColor = "";
        };

    },[]);
    
    return(
    <>
        <Container fluid>
            <Row className="works-wrapper d-flex justify-content-center align-items-center">
                <Col lg={8} md={12} sm={12}>
                    <div className="title">
                                <p className="text f-t">Works</p>
                                
                    </div>
                </Col>
                

                <Col lg={7} md={12} sm={12} >
                    <h1><strong>ReDesign & Coding (NAMOO ACTORS)</strong></h1>
                    <h4>Home, Introduction, History 컴포넌트 코딩 작업을 수행하였습니다.</h4>
                    <pre><h6><strong># Vue / Vuetify   #Scss   #HTML</strong></h6> </pre>
                </Col>

                <Col lg={7} md={12} sm={12} >
                    <div className="video ">
                        <video 
                            src={VideoSource} 
                            autoPlay
                            muted
                            loop
                            width="100%"
                            
                            >
                        </video>
                        <Button
                            className="button" 
                            onClick={() => window.open("https://monggea.github.io/namooActors", "_blank")}>
                        Go to the Site
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default Works;