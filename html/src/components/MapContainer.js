import React, {Component} from "react"
import {Map, Marker, InfoWindow, Polyline, GoogleApiWrapper} from 'google-maps-react';
import styles from '../components/map.module.css'

const polyline = [
    {lat: 54.973513, lng: -1.625076}, // USB
                {lat: 54.973434, lng: -1.624915},
                {lat: 54.973374, lng: -1.624636},
                {lat: 54.973362, lng: -1.624394},
                {lat: 54.973403, lng: -1.624087},
                {lat: 54.973910, lng: -1.622007}, //Barrack Road
                {lat: 54.973744, lng: -1.621728},
                {lat: 54.973606, lng: -1.621387},
                {lat: 54.973546, lng: -1.621140},
                {lat: 54.973573, lng: -1.620809},
                {lat: 54.973594, lng: -1.620154},
                {lat: 54.973614, lng: -1.619930},
                {lat: 54.973648, lng: -1.619729}, // St Andrew's Way
                {lat: 54.973536, lng: -1.619654}, // Chinatown Gate
                {lat: 54.973511, lng: -1.619626},
                {lat: 54.973422, lng: -1.619487},
                {lat: 54.973340, lng: -1.619253},
                {lat: 54.973337, lng: -1.618615},
                {lat: 54.973334, lng: -1.618317},
                {lat: 54.973321, lng: -1.617937},
                {lat: 54.973280, lng: -1.6176416},
                {lat: 54.973152, lng: -1.617671},
                {lat: 54.973057, lng: -1.617666},
                {lat: 54.972544, lng: -1.617475}, // The Gate
                {lat: 54.972441, lng: -1.617417},
                {lat: 54.972325, lng: -1.617290},
                {lat: 54.972327, lng: -1.617295},
                {lat: 54.972221, lng: -1.617137},
                {lat: 54.972147, lng: -1.616955},
                {lat: 54.971992, lng: -1.616568}, // Clayton Street
                {lat: 54.972435, lng: -1.616190},
                {lat: 54.972904, lng: -1.615821}, // Enter Grainger Market
                {lat: 54.972810, lng: -1.615378},
                {lat: 54.973497, lng: -1.614862}, // Nelson Street
                {lat: 54.973207, lng: -1.613713}, // Grainger Street
                {lat: 54.973664, lng: -1.613296},
                {lat: 54.973675, lng: -1.613011}, // Grey Street
                {lat: 54.972463, lng: -1.612316},
                {lat: 54.972121, lng: -1.612037}, // High Bridge
                {lat: 54.971989, lng: -1.612380},
                {lat: 54.971858, lng: -1.612613},
                {lat: 54.971166, lng: -1.613344},
                {lat: 54.970985, lng: -1.613506}, // Bigg Market
                {lat: 54.971102, lng: -1.613860},
                {lat: 54.971252, lng: -1.614465},
                {lat: 54.971415, lng: -1.615000}, // Grainger Street
                {lat: 54.970823, lng: -1.615584},
                {lat: 54.969936, lng: -1.616380}, // Westgate Road
                {lat: 54.969456, lng: -1.616580},
                {lat: 54.969326, lng: -1.616462}, // Neville Street
                {lat: 54.969392, lng: -1.616011},
                {lat: 54.969464, lng: -1.615131},
                {lat: 54.969551, lng: -1.614638},
                {lat: 54.969633, lng: -1.614318}, // Collingwood Street
                {lat: 54.969714, lng: -1.613849},
                {lat: 54.970081, lng: -1.612612},
                {lat: 54.970203, lng: -1.612260},
                {lat: 54.969825, lng: -1.611853}, // Side Street
                {lat: 54.969754, lng: -1.611584},
                {lat: 54.969721, lng: -1.611482},
                {lat: 54.969636, lng: -1.611310},
                {lat: 54.969522, lng: -1.611157},
                {lat: 54.969502, lng: -1.611038},
                {lat: 54.969494, lng: -1.610920},
                {lat: 54.969498, lng: -1.610807},
                {lat: 54.969531, lng: -1.610594},
                {lat: 54.969573, lng: -1.610121},
                {lat: 54.969551, lng: -1.609944},
                {lat: 54.969478, lng: -1.609583},
                {lat: 54.969454, lng: -1.609284},
                {lat: 54.969384, lng: -1.608913},
                {lat: 54.969356, lng: -1.608730},
                {lat: 54.969292, lng: -1.608217},
                {lat: 54.969265, lng: -1.608107},
                {lat: 54.969232, lng: -1.608023},
                {lat: 54.969198, lng: -1.607960}, // Sandhill
                {lat: 54.969050, lng: -1.607871},
                {lat: 54.968950, lng: -1.607860},
                {lat: 54.968810, lng: -1.607934},
                {lat: 54.968700, lng: -1.608024},
                {lat: 54.968539, lng: -1.608253},
                {lat: 54.968390, lng: -1.608586}, // Bridge Street
                {lat: 54.968119, lng: -1.608484},
                {lat: 54.967645, lng: -1.607898},
                {lat: 54.967263, lng: -1.607421},
                {lat: 54.966774, lng: -1.606704},
                {lat: 54.967395, lng: -1.605491}
]

const containerStyle = {
    width: "100%",
    height: "50vh",
    position: "relative",
    marginTop: "1em"
}

const style = {
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
    backgroundColor: "rgb(229, 227, 223)"
}
 
export class MapContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originalCenter: {lat: 54.971907, lng: -1.614417},
            originalBounds: new props.google.maps.LatLngBounds(
                {lat: 54.960907, lng: -1.625812},
                {lat: 54.983063, lng: -1.604593}),
            railIcon: {
                url:"https://www.michaeldono.com/mentors/tour/png/rail_metro.png", 
                scaledSize:new props.google.maps.Size(43,16)
            },
            metroIcon: {
                url:"https://www.michaeldono.com/mentors/tour/png/metro.png", 
                scaledSize:new props.google.maps.Size(16,16)
            },
            originIcon: {
                url:"https://www.michaeldono.com/mentors/tour/png/origin.png", 
                scaledSize:new props.google.maps.Size(18,18)
            },
            pointsOfInterest: [
                {url:"https://www.michaeldono.com/mentors/tour/png/poi1.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi2.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi3.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi4.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi5.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi6.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi7.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi8.png", scaledSize:new props.google.maps.Size(18,18)},
                {url:"https://www.michaeldono.com/mentors/tour/png/poi9.png", scaledSize:new props.google.maps.Size(18,18)
            }],
            selectedPlace: {},
            activeMarker: {},
            showingInfoWindow: false
        }
    }
    
  centerMoved = (mapProps, map) => {
    var limited = false;
    var north = false;
    var south = false
    var newCenter = map.getCenter();
    if (this.state.originalBounds.getSouthWest().lat() >= newCenter.lat()) {
        // too south
        map.panTo({lat: this.state.originalBounds.getSouthWest().lat(), lng: newCenter.lng()});
        south = true;
        limited = true;
    }

    if (this.state.originalBounds.getSouthWest().lng() >= newCenter.lng()) {
        // too west
        if (limited) {
            // too west AND south
            map.panTo({lat: this.state.originalBounds.getSouthWest().lat(), lng: this.state.originalBounds.getSouthWest().lng() });
        } else {
            map.panTo({lat: newCenter.lat(), lng: this.state.originalBounds.getSouthWest().lng() });
        }

        limited = true;
    }
    if (this.state.originalBounds.getNorthEast().lat() <= newCenter.lat()) {
        // too north
        if (limited) {
            // too north AND west
            map.panTo({lat: this.state.originalBounds.getNorthEast().lat(), lng: this.state.originalBounds.getSouthWest().lng() });
        } else {
            map.panTo({lat: this.state.originalBounds.getNorthEast().lat(), lng: newCenter.lng()});
        }
        north = true;
        limited = true;
    }
    if (this.state.originalBounds.getNorthEast().lng() <= newCenter.lng()) {
        // too east
        if (north) {
            // too east AND north
            map.panTo({lat: this.state.originalBounds.getNorthEast().lat(), lng: this.state.originalBounds.getNorthEast().lng() });
        } else if (south) {
            // too east AND south
            map.panTo({lat: this.state.originalBounds.getSouthWest().lat(), lng: this.state.originalBounds.getNorthEast().lng() });
        } else {
            map.panTo({lat: newCenter.lat(), lng: this.state.originalBounds.getNorthEast().lng() });
        }
        
        limited = true;
    }
    
  }

  onMarkerClick = (props, marker) => {
      console.log(this)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = () => {
    // if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };


  render() {
    return (
      <Map google={this.props.google} 
        zoom={15}
        minZoom={14}
        containerStyle={containerStyle}
        className={styles.map}
        style={style}
        onClick={this.onMapClicked}
        initialCenter={{ lat: 54.971907, lng: -1.614417}}
        onDragend={this.centerMoved}
        mapType="roadmap"
        mapTypeControl={false}
        streetViewControl={false}
        gestureHandling="greedy"
        zoomControl={false}
        styles={[
            {
                "featureType": "administrative.locality",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "simplified"
                }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.text",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            }
        ]}
        >

        <Polyline 
            path={polyline}
            strokeColor="#FF0000"
            strokeOpacity={0.75}
            strokeWeight={6} />

        <Marker // centralStation
            name="Dolores park"
            position={{lat: 54.968492, lng: -1.617075}}
            icon={this.state.railIcon}
            onClick={this.onMarkerClick} />
            
                <InfoWindow  marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>Hi!</div>
                {/* <div class="transitLabel">
                    <h1>Central Station</h1>
                    <h2><img src="https://www.michaeldono.com/mentors/tour/png/rail.png"/>National Rail</h2>
                    <div class="tocs midSection">
                        <div class="toc lner"><p>LNER<p></div><br>
                        <div class="toc tpe"><p>Transpennine Express<p></div><br>
                        <div class="toc xc"><p>CrossCountry<p></div><br>
                        <div class="toc northern"><p>Northern<p></div><br>
                    </div>
                    <h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>
                    <div class="tocs">
                        <div class="toc greenLine"><p>Green Line<p></div><br>
                        <div class="toc yellowLine"><p>Yellow Line<p></div><br>
                    </div>
                </div> */}
            </InfoWindow>
            

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD6VpJL_9hov0zcdQ88Jn7ITyM75GEMuW4")
})(MapContainer)