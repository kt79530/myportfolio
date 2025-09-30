
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {motion} from "framer-motion";
import '../css/_Works.scss';
import VideoSource from '../img/work-video.mp4';
import VideoSource2 from '../img/work-video2.mp4'

//import Aos from "aos";
//import 'aos/dist/aos.css';

const Works = () =>{
    
    return(
    <>
        <Container >
            <Row className="works-wrapper d-flex justify-content-center align-items-center">
                <Col lg={9} md={9} sm={10}>
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

                <Col lg={9} md={9} sm={10}>
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

                <Col lg={9} md={9} sm={10} className="mt-3">
                    <motion.article
                        className="content mt-3" 
                        initial={{ opacity: 0, y: 50 }}   
                        animate={{ opacity: 1, y: 0 }}    
                        transition={{ duration: 1 }}      
                        >
                        <div className="video">
                                <video 
                                    src={VideoSource2} 
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
                            <h2>종합 유기견 보호센터 </h2>
                            <h5>Home, 동물을 찾습니다, 무료분양, 봉사/후원하기, 모달 컴포넌트 코딩 작업을 수행하였습니다.<br/>
                                시멘틱 태그, BootStrap을 적용해서 간결하게 재사용성과 유지보수성을 확보하였으며, 웹 뷰포트에 구현하였습니다.
                            </h5>
                            <pre><h6 className="color-animate"><strong>#React #React-BootStrap #Scss #HTML</strong></h6> </pre>
                            
                        </div>
                    </motion.article>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default Works;