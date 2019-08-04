import React from "react"
import {Helmet} from "react-helmet";
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapContainer from '../components/MapContainer'
import NavBar from '../components/navbar'
import containerStyles from '../components/container.module.css'
import styles from '../components/tour.module.css'

import '../bootstrap/css/bootstrap.css'
import '../components/fonts.css'

const waypoints = [
    {
        icon: {
            url:"https://www.michaeldono.com/png/origin.png", 
            size:[18,18]
        },
        position: {lat: 54.973513, lng: -1.625076}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi1.png", 
            size:[18,18]
        },
        position: {lat: 54.973536, lng: -1.619654}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi2.png", 
            size:[18,18]
        },
        position: {lat: 54.972544, lng: -1.617475}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi3.png", 
            size:[18,18]
        },
        position: {lat: 54.972810, lng: -1.615378}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi4.png", 
            size:[18,18]
        },
        position: {lat: 54.972680, lng: -1.612442}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi5.png", 
            size:[18,18]
        },
        position: {lat: 54.971232, lng: -1.614465}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi6.png", 
            size:[18,18]
        },
        position: {lat: 54.970867, lng: -1.615544}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi7.png", 
            size:[18,18]
        },
        position: {lat: 54.969903, lng: -1.611950}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi8.png", 
            size:[18,18]
        },
        position: {lat: 54.967380, lng: -1.607570}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/png/poi9.png", 
            size:[18,18]
        },
        position: {lat: 54.967395, lng: -1.605491}
    },
]

const markers = [
    { // Gateshead
        icon: {
            url:"https://www.michaeldono.com/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.962207, lng: -1.604320},
        id: 1
    },
    { // Central Station
        icon: {
            url:"https://www.michaeldono.com/png/rail_metro.png", 
            size:[43,16]
        },
        position: {lat: 54.968492, lng: -1.617075},
        id: 2
    },
    { // Monument
        icon: {
            url:"https://www.michaeldono.com/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.973847, lng: -1.613261},
        id: 3
    },
    { // Haymarket
        icon: {
            url:"https://www.michaeldono.com/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.977481, lng: -1.613876},
        id: 4
    },
    { // St James
        icon: {
            url:"https://www.michaeldono.com/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.974343, lng: -1.620630},
        id: 5
    },
    { // Manors
        icon: {
            url:"https://www.michaeldono.com/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.973970, lng: -1.604811},
        id: 6
    },
  ];


export default ({ data }) => (
  <Container fluid="true" className={containerStyles.container}>
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#202e5f" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="description" content="Personal website for Michael Dono, a Stage 2 Computer Science student at Newcastle"></meta>
        <title>Michael Dono | Newcastle Tour</title>
    </Helmet>
  <Row>
    <NavBar />
    <Col lg="9" xl="10" className={styles.container}>
      <h1>Newcastle Quayside Tour</h1>
      <MapContainer markers={markers} waypoints={waypoints} />
            
      {data.allStrapiWaypoint.nodes.map(node => (
        <>
         <Row className={styles.content}>
          <Col>
            <div className={styles.waypointIcon}><span>{node.number}</span></div>
            <h2 className={styles.waypointName}>{node.name}</h2>
          </Col>
        </Row>
        <Row className={styles.content}>
          <Col xl="7">
          <Img fluid={node.image.childImageSharp.fluid} className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>{node.content}</span>
          </Col>
        </Row>
        </>
       
      ))}
{/* 
      <Row className={styles.contentFirst}>
        <Row>
            <Col>
                <div className={styles.waypointIcon}><span>0</span></div>
                <h2 className={styles.waypointName}>Newcastle Helix</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <Img fluid={data.tyneBrewery.childImageSharp.fluid} className={styles.poiImage}  />
          </Col>
          <Col xl="5">
            <span>The USB is part of the Helix site. This area of Newcastle has a long history. The entire site used to be used to brew Newcastle Brown Ale, and before that it was a coal mine.
                Tyne Brewery closed in 2005, after which the area has changed drastically.</span><br/>
            <span>This photo shows the former bottling plant (now The Core, opposite the People's Kitchen). The Core opened in 2014, the first part of what was then Science Central.
                The Key opened in 2016 just behind it. The Urban Sciences Building opened in 2017.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <Img fluid={data.sandman.childImageSharp.fluid} className={styles.poiImage}  />
          </Col>
          <Col xl="5">
            <span>The Learning and Teaching Centre opens Autumn 2019, providing more teaching spaces for the Computing and Business Schools. The Lumen, The Spark and National Innovation Centres
                for Data and Aging are well underway.</span><br/>
            <span>This photo shows what is now the Sandman Signature Hotel and Shark Bar - it wasn't long ago that this was the head office of Scottish and Newcastle Brewery 
                (who makes Newcastle Brown Ale) - its history is acknowledge by the famous Brown Ale Blue Star on the building.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <Img fluid={data.helix.childImageSharp.fluid} className={styles.poiImage}  />
          </Col>
          <Col xl="5">
          <span>The Helix site is a sustainable urban development - open, green space for education, research and living. Almost all buildings have gardens on their roofs 
                (The USB has the meadow and terrace). Work will soon be starting on Smart Homes that can be remotely controlled via public WiFi on the entire site.</span>
          </Col>
        </Row>
      </Row> */}

      <div className={styles.tourDescription}>
        <span>
            This tour for Stage 1 Computer Science students helps you explore Newcastle
            - knowing your way around the city goes a long way to making Newcastle
            feel like your new home.
        </span>
        <span>
            You'll start at the USB and walk to the Monument via China Town, The Gate and Grainger Market.
            Next we'll walk to Central Station, past Newcastle Castle and then down to the Quayside.
        </span>
        <span>Finally we'll finish off by crossing over the Swing Bridge to the </span>
            <a href="https://www.google.co.uk/maps/place/Backyard+Bike+Shop/@54.9672254,-1.6065408,20z/data=!4m5!3m4!1s0x487e712ae5a840a1:0xf7d2c935e96eefe3!8m2!3d54.9672247!4d-1.6059934">
            Backyard Bike Shop</a><span> for a hot drink and an amazing view of the bridges over the River Tyne. This tour is 3km long.
        </span>
      </div>
    </Col>
  </Row>
</Container>
)


export const pageQuery = graphql`
query IndexQuery {
  allStrapiWaypoint {
    nodes {
      content
      name
      }
      image {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      number
      id
    }
  }
}
`