import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useEffect } from "react";

import '../css/Home.css';

function Home () {

    useEffect(() => {
        document.body.style.backgroundImage="url('/img/desert.jpg')";
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundRepeat="no-repeat"

        return () => {
            document.body.style.backgroundImage="";
            document.body.style.backgroundSize="";
            document.body.style.backgroundRepeat="";
        };
    },[]);

    return(
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <p className="topic-en">Life is about courage and going into the unknown</p> 
                    <p className="topic">"인생이란 용기를 내서 미지의 세계로 나아가는 것이다"</p>
                </Col>
                <Col lg={12} md={12} sm={12}>
                
                </Col>
            </Row>
        </Container>
    );
}
export default Home;


/*<LetterByLetter
            text="Life is about courage and going into the unknown"
            className="topic-en"
            delay={50}
          />
          <LetterByLetter
            text='"인생이란 용기를 내서 미지의 세계로 나아가는 것이다"'
            className="topic"
            delay={80}
          />*/