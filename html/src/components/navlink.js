import { Link } from "gatsby"
import React from "react"
import Nav from 'react-bootstrap/Nav'

export default (props) => (
    <Nav.Link>
        <Link to={props.linkTo}>
            <h1>{props.children}</h1>
        </Link>
    </Nav.Link>
  )
