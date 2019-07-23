import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/navbar'
import containerStyles from '../components/container.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

const SecondPage = () => (
  <Container fluid="true" className={containerStyles.container}>
  <Row>
    <NavBar />
    <Col lg="9" xl="10">
      <div>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </div>
    </Col>
  </Row>
</Container>
)

export default SecondPage
