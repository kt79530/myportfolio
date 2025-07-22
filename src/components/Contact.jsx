import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import '../css/_Contact.scss';
import '../css/Font.scss';

const Contact = () =>{

//body background-color 지정
    useEffect(() => {
  document.body.style.backgroundColor = "#000263"

  return () => {
    document.body.style.backgroundColor = "";
  };
}, []);

//본문
    return(
    <>
        <Container >
            <Row className="wrap">
                <Col lg={8} md={12} sm={12} className="title-box" >
                    <div className="text-bg">
                    <p className="f-t">Contact Me</p>    
                    <span className="f-st">
                        “To see the world, things dangerous to come to,<br/>
                        to see behind walls, draw closer, to find each other, and to feel.<br/>
                        That is the purpose of life.”
                    </span>
                    </div>
                </Col>
                <Col lg={4} md={12} sm={12} className="adr d-flex justify-content-center align-items-center" >    
                    <div className="infor-box" >
                       <h3 className="line-height"><strong> kiteaman@naver.com</strong></h3>
                       <h3 className="line-height"><strong>  010. 1234. 5678</strong></h3>
                       <h3 className="line-height"><strong> github.com/sag/sfgw</strong></h3>
                    </div>
                    
                </Col>            
            </Row>
        </Container>
    </>
    );
}

export default Contact;