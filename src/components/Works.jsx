<<<<<<< HEAD
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import '../css/_Works.scss';
import VideoSource from '../img/work-video.mp4';

//import Aos from "aos";
//import 'aos/dist/aos.css';

const Works = () =>{
    
    return(
    <>
        <Container >
            <Row className="works-wrapper d-flex justify-content-center align-items-center">
                <Col lg={9} md={6} sm={12}>
                <motion.div
                    className="title-wrap mt-5"
                    initial={{ opacity: 0, y: -20 }}   // 시작 상태
                    animate={{ opacity: 1, y: 0 }}    // 애니메이션 후 상태
                    transition={{ duration: 0.7 }}      // 실행 시간
                >
                    <h1 className="mb-3"><strong>Works</strong></h1>
                    <h3 className="ms-5"><strong>&lt; ReDesign & Coding &gt; </strong></h3>
                </motion.div>
                </Col>

                <Col lg={9} md={6} sm={12}>
                    <motion.article
                        className="content mt-3" 
                        initial={{ opacity: 0, y: 50 }}   
                        animate={{ opacity: 1, y: 0 }}    
                        transition={{ duration: 1 }}      
                        >
                        <div className="video">
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
                        <div className="infor-wrap mt-3 ms-2">
                            <h2>NAMOO ACTORS </h2>
                            <h5>Home, Introduction, History 컴포넌트 코딩 작업을 수행하였습니다.<br/>
                                재사용성과 유지보수성을 확보하였으며, 다양한 디바이스 환경에 대응하는 반응형 UI를 구현하였습니다.
                            </h5>
                            <pre><h6 className="color-animate"><strong># Vue / Vuetify   #Scss   #HTML</strong></h6> </pre>
                            
                        </div>
                    </motion.article>
                </Col>
            </Row>
        </Container>
    </>
    );
}

=======
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import '../css/_Works.scss';
import VideoSource from '../img/work-video.mp4';

//import Aos from "aos";
//import 'aos/dist/aos.css';

const Works = () =>{
    
    return(
    <>
        <Container >
            <Row className="works-wrapper d-flex justify-content-center align-items-center">
                <Col lg={9} md={6} sm={12}>
                <motion.div
                    className="title-wrap mt-5"
                    initial={{ opacity: 0, y: -20 }}   // 시작 상태
                    animate={{ opacity: 1, y: 0 }}    // 애니메이션 후 상태
                    transition={{ duration: 0.7 }}      // 실행 시간
                >
                    <h1 className="mb-3"><strong>Works</strong></h1>
                    <h3 className="ms-5"><strong>&lt; ReDesign & Coding &gt; </strong></h3>
                </motion.div>
                </Col>

                <Col lg={9} md={6} sm={12}>
                    <motion.article
                        className="content mt-3" 
                        initial={{ opacity: 0, y: 50 }}   
                        animate={{ opacity: 1, y: 0 }}    
                        transition={{ duration: 1 }}      
                        >
                        <div className="video">
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
                        <div className="infor-wrap mt-3 ms-2">
                            <h2>NAMOO ACTORS </h2>
                            <h5>Home, Introduction, History 컴포넌트 코딩 작업을 수행하였습니다.<br/>
                                재사용성과 유지보수성을 확보하였으며, 다양한 디바이스 환경에 대응하는 반응형 UI를 구현하였습니다.
                            </h5>
                            <pre><h6 className="color-animate"><strong># Vue / Vuetify   #Scss   #HTML</strong></h6> </pre>
                            
                        </div>
                    </motion.article>
                </Col>
            </Row>
        </Container>
    </>
    );
}

>>>>>>> cf6b372028391d8d2075873f9280ff29f1d7d9c1
export default Works;