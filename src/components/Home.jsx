import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Home () {
    return(
       
        <>
       
            <Container>
                <Row>
                    <Col>
                    <h1><strong>Hello~~</strong></h1>
                    </Col>
                </Row>
            </Container>
        <Outlet/>
        </>
    );
}
export default Home;