import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from "../components/navlink"
import '../bootstrap/css/bootstrap.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Container fluid="true">
      <Row>
        <Col md="2">
        <Nav defaultActiveKey="/home" className="flex-column">
          <NavLink linkTo="/">Michael Dono</NavLink>
          <NavLink linkTo="/">Home</NavLink>
          <NavLink linkTo="/">Newcastle Quayside Tour</NavLink>
        </Nav>
        <div class="header">Michael Dono</div>
        <div class="divider"></div>
        <div class="projects">
          <div class="subheader">Projects</div>
          <div class="listing">
            <a href="https://www.michaeldono.com" class="this"><div>Homepage</div></a>
            <a href="https://www.michaeldono.com/mentors/tour"><div>Newcastle Quayside Tour</div></a>
          </div>
        </div>
        </Col>
        <Col md="10">
          <div>
            <h1>Michael Dono</h1>
            <p>Programmer, Student and Former Child.</p>
          </div>
        </Col>
      </Row>
    </Container>

)

export default IndexPage
