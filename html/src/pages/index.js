import React from "react"
import {Helmet} from "react-helmet";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/navbar'
import containerStyles from '../components/container.module.css'
import styles from '../components/homepage.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'


const IndexPage = () => (
  <Container fluid="true" className={containerStyles.container}>
    <Helmet>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#202e5f" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="description" content="A tour of Newcastle upon Tyne for new students at Newcastle University"></meta>
          <title>Michael Dono</title>
    </Helmet>
    <Row className={styles.row}>
      <NavBar />
      <Col lg="9" xl="10" className={styles.contentContainer}>
        <div>
          <h1 className={styles.header}>Michael Dono</h1>
          <ul>
            <li>Computer Science Undergraduate at Newcastle. </li>
            <li>Intelligent Infrastucture at Network Rail.</li>
            <li>Former Child.</li>
          </ul>
        </div>
          
      </Col>
    </Row>
  </Container>

)

export default IndexPage
