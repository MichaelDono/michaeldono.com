import React from "react"

import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from "./navlink"
import '../bootstrap/css/bootstrap.css';
import { Link } from "gatsby"
import styles from './navbar.module.css'
import Nav from "react-bootstrap/Nav";

export default (props) => (
    <Col lg="3" xl="2" className={styles.container}>
        <Navbar collapseOnSelect expand="lg" className={`flex-lg-column ${styles.navbar}`}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className={styles.header}>Michael Dono</div>
            <span className={styles.divider}></span>
            <Navbar.Collapse>
                <Nav className={`flex-lg-column ${styles.responsiveNav}`}>
                    <Nav.Link as={NavLink} linkTo="/" eventKey="1">Home</Nav.Link>
                    <Nav.Link as={NavLink} linkTo="/page-2" eventKey="2">Newcastle Quayside Tour</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Col>

)
