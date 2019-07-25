import React from "react"

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
            url:"https://www.michaeldono.com/mentors/tour/png/origin.png", 
            size:[18,18]
        },
        position: {lat: 54.973513, lng: -1.625076}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi1.png", 
            size:[18,18]
        },
        position: {lat: 54.973536, lng: -1.619654}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi2.png", 
            size:[18,18]
        },
        position: {lat: 54.972544, lng: -1.617475}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi3.png", 
            size:[18,18]
        },
        position: {lat: 54.972810, lng: -1.615378}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi4.png", 
            size:[18,18]
        },
        position: {lat: 54.972680, lng: -1.612442}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi5.png", 
            size:[18,18]
        },
        position: {lat: 54.971232, lng: -1.614465}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi6.png", 
            size:[18,18]
        },
        position: {lat: 54.970867, lng: -1.615544}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi7.png", 
            size:[18,18]
        },
        position: {lat: 54.969903, lng: -1.611950}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi8.png", 
            size:[18,18]
        },
        position: {lat: 54.967380, lng: -1.607570}
    },
    {
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/poi9.png", 
            size:[18,18]
        },
        position: {lat: 54.967395, lng: -1.605491}
    },
]

const markers = [
    { // Gateshead
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.962207, lng: -1.604320},
        id: 1
    },
    { // Central Station
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/rail_metro.png", 
            size:[43,16]
        },
        position: {lat: 54.968492, lng: -1.617075},
        id: 2
    },
    { // Monument
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.973847, lng: -1.613261},
        id: 3
    },
    { // Haymarket
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.977481, lng: -1.613876},
        id: 4
    },
    { // St James
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.974343, lng: -1.620630},
        id: 5
    },
    { // Manors
        icon: {
            url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
            size:[16,16]
        },
        position: {lat: 54.973970, lng: -1.604811},
        id: 6
    },
  ];

const Tour = () => (
  <Container fluid="true" className={containerStyles.container}>
  <Row>
    <NavBar />
    <Col lg="9" xl="10" className={styles.container}>
      <h1>Newcastle Quayside Tour</h1>
      <MapContainer markers={markers} waypoints={waypoints}/>
      
      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>0</span></div>
                <h2>Newcastle Helix</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/tyne_brewery.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The USB is part of the Helix site. This area of Newcastle has a long history. The entire site used to be used to brew Newcastle Brown Ale, and before that it was a coal mine.
                Tyne Brewery closed in 2005, after which the area has changed drastically.</span>
            <span>This photo shows the former bottling plant (now The Core, opposite the People's Kitchen). The Core opened in 2014, the first part of what was then Science Central.
                The Key opened in 2016 just behind it. The Urban Sciences Building opened in 2017, and The Biosphere is opening this month.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <img src="jpg/sandman.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The Learning and Teaching Centre opens Autumn 2019, providing more teaching spaces for the Computing and Business Schools. The Lumen, The Spark and National Innovation Centres
                for Data and Aging are well underway.</span>
            <span>This photo shows what is now the Sandman Signature Hotel and Shark Bar - it wasn't long ago that this was the head office of Scottish and Newcastle Brewery 
                (who makes Newcastle Brown Ale) - its history is acknowledge by the famous Brown Ale Blue Star on the building.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <img src="jpg/helix.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
          <span>The Helix site is a sustainable urban development - open, green space for education, research and living. Almost all buildings have gardens on their roofs 
                (The USB has the meadow and terrace). Work will soon be starting on Smart Homes that can be remotely controlled via public WiFi on the entire site.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>1</span></div>
                <h2>Chinatown</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/chinatown1.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>Newcastle is one of only 5 cities in the UK to have a Chinatown. The first Chinese restaurant in Newcastle opened in 1949. The Chinese community in Tyne and Wear rapidly grew in the 1960s,
                though the first Chinese business didn't move to Stowell Street until 1978. Many others followed suit, and in 1988 the street signs became bilingual - by which point the area had become
                one of the most characterful and distinct in Newcastle. The Chinese Arch was built in 2004 on St Andrew's Street and stands 11 metres tall, costing £475,000.</span>
            <span>Chinatown is a good shortcut to The Gate, Bigg Market, and Central station. Of course, there's many takeaways and restaurants here, as well as Chinese supermarkets.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>2</span></div>
                <h2>The Gate</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/TheGate.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>Many restaurants (including an around-the-world buffet), nightclubs, casino and cinema. 
                100m or so from Space Golf and a gym. Debenhams is an entrance to Eldon Square - there's also stairs and a lift to it near the Premier Inn.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>3</span></div>
                <h2>Grainger Market</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/GraingerMarket.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>Lots of food and ingredients on sale here - meats, fish, fruit and veg, sauces. Great pizza by the slice here as well! 
                Also near here is a Tesco Metro, Poundland, Grey's Quarter inside Eldon Square, and escalators up to Eldon Square. 
                Grainger Games (though now defunct) started here.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>4</span></div>
                <h2>Grey's Monument</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/greys-monument.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The monument was built in 1838 to celebrate the Great Reform Act of 1832.
                        The act was wrote by the Prime Minister Earl Grey (the one the tea is named after) from Northumberland.
                        It increased the electorate to 650,000 from 400,000 - starting the ball rolling on the UK becoming truly democratic. 
                        All men 21 and over got the right to vote in 1918, and ten years later women. 18 year-olds could only vote after 1969! 
                        This area has changed a lot over the years
                        - it used to be a busy roundabout (you can see the supports that were installed inside the monument for the trams that once ran all over Newcastle)</span>
            <span>Monument is the de facto centre of Newcastle, with Monument Metro station below, the main entrance to Grey's Quarter, many bus services, 
                        and the head of Grey Street and Grainger Street - you can see the Monument along them 
                        (including along Grainger Street as you walk out of Central Station), ideal for knowing where you are.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <img src="jpg/earl-grey.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>You can get tours of the Monument, where you climb the spiral staircase inside - 
                        the view is fantastic, and a great (if windy) unique selfie opportunity 😜. Check NUSU's Give it a Go for more details.</span>
            <span>One of the two streets heading south from Monument is Grey Street - the quickest way to get to the Quayside from Monument.</span>
          </Col>
        </Row>
      </Row>
      <Row className={styles.content}>
        <Row>
          <Col xl="7">
            <img src="jpg/grey_street.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The Theatre Royal is the standout feature and shows ballets, contemporary dance, drama, musicals and opera. 
                      Also just off Grey Street is Tyneside Cinema - Newcastle's only independent cultral cinema, 
                      screening independent and world cinema as well as the usual films on offer at other cinemas.</span>
            <span>To get to the Quayside from here just keep walking straight on, and continue south along Dean Street. Grey street connects onto High Bridge - 
                      where there's bars, pubs and a comedy club. It's easy to not know it exists!</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>5</span></div>
                <h2>Bigg Market</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/BiggMarket.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>Famous to some, infamous to others, there's a lot of clubs along here. 
                        There's a lot of redevelopment planned here, so in the coming years it will be looking much more attractive and charming.
                        The name comes from being a busy marketplace for "Bigg", a type of barley. 
                        It used to be part of the main road from London to Edinburgh!</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>6</span></div>
                <h2>Grainger Street</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/grainger_street.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The fastest route between the station and Monument. Leaving Bigg Market, here's a 24hr McDonalds near Bigg Market, ideal for a late night. 
                      Moving south towards the station, there's good nerdy and geeky shops - Forbidden Planet, Geek Retreat and the newly opened Be More Geek. </span>
            <span>At the Central station end there is a huge Wetherspoons and a church built in 1287 - one of the oldest buildings in Newcastle.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>7</span></div>
                <h2>St Nicholas Square</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/newcastlecastle.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>One of the biggest and best parts of Newcastle's nightlife - Flares, Soho, Mono, Revolution and many others. Connecting to Bigg Market,
                        this somewhere you'll see a lot of on any night out.</span>
            <span>This is a very historic part of Newcastle. The Civic Centre used to be here, and Hadrian's Wall ran mere metres away from here along Westgate Road. </span>
            <span>The Cathedral Church of St Nicholas made Newcastle became a city in 1882. Newcastle Castle stands on St Nicholas Street, 
                        just south of the railway to Edinburgh.</span>
          </Col>
        </Row>
      </Row>

      <Row className={styles.content}>
        <Row>
            <Col>
                <div className="poiModal rounded-circle"><span>8</span></div>
                <h2>Swing Bridge</h2>
            </Col>
        </Row>
        <Row>
          <Col xl="7">
            <img src="jpg/bridges.jpg" className={styles.poiImage} />
          </Col>
          <Col xl="5">
            <span>The Quayside around the bridges across the Tyne are now a thriving, cosmopolitan area with bars, restaurants and public spaces.</span>
          </Col>
        </Row>
      </Row>
      <div className="tourDescription">
        <span>
            This tour for Stage 1 Computer Science students helps you explore Newcastle
            - knowing your way around the city goes a long way to making Newcastle
            feel like your new home.
        </span>
        <span>
            You'll start at the USB and walk to the Monument via China Town, The Gate and Grainger Market.
            Next we'll walk to Central Station, past Newcastle Castle and then down to the Quayside.
        </span>
        <span>
            Finally we'll finish off by crossing over the Swing Bridge to the 
            <a href="https://www.google.co.uk/maps/place/Backyard+Bike+Shop/@54.9672254,-1.6065408,20z/data=!4m5!3m4!1s0x487e712ae5a840a1:0xf7d2c935e96eefe3!8m2!3d54.9672247!4d-1.6059934">
            Backyard Bike Shop</a> for a hot drink and an amazing view of the bridges over the River Tyne. This tour is 3km long.
        </span>
      </div>
    </Col>
  </Row>
</Container>
)

export default Tour
