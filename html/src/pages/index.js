import React from "react"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/navbar'
import styles from '../components/homepage.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'


const IndexPage = () => (
    <Container fluid="true">
      <Row className={styles.row}>
        <NavBar />
        <Col lg="9" xl="10" className={styles.container}>
          <div>
            <h1>Michael Dono</h1>
            <p>Programmer, Student and Former Child.</p>
          </div>
            
        </Col>
      </Row>
    </Container>

)

export default IndexPage
