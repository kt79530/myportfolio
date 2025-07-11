import React from "react";
import {Container, Row, Col} from "react-bootstrap";
//import NavLayout from "./NavLayout";

function Home () {
    return(
        <Container>
            <Row>
                <Col>
                <h1><strong>"인생은 B(birth)와 D(death) 사이에 C(choice)다."</strong></h1>
                <h3><strong>Life is a C between B and D</strong></h3>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;