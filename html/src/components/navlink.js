import { Link } from "gatsby"
import React from "react"

import styles from './navlink.module.css'

export default (props) => (
    <Link {...props} activeClassName={styles.active} className={styles.link} to={props.linkTo}>{props.children}</Link>
  )
