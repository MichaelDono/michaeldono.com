import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/navbar'
import '../bootstrap/css/bootstrap.css';

const SecondPage = () => (
  <Container fluid="true">
  <Row>
    <NavBar />
    <Col md="10">
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </div>
    </Col>
  </Row>
</Container>
)

export default SecondPage
