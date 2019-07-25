import React from "react"
import { Link } from "gatsby"

import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import NavLink from "./navlink"
import '../bootstrap/css/bootstrap.css';
import styles from './navbar.module.css'
import Nav from "react-bootstrap/Nav";

export default () => (
    <Col lg="3" xl="2" className={styles.container}>
        <Navbar collapseOnSelect expand="lg" className={`flex-lg-column ${styles.navbar}`}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Link className={styles.header} to="/">Michael Dono</Link>
            <span className={styles.divider}></span>
            <Navbar.Collapse>
                <Nav className="flex-lg-column">
                    <Nav.Link as={NavLink} linkTo="/" eventKey="1">Home</Nav.Link>
                    <Nav.Link as={NavLink} linkTo="/tour" eventKey="2">Newcastle Quayside Tour</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Col>

)
