import React, {Component} from "react"
import {Map, GoogleApiWrapper} from 'google-maps-react';
import styles from '../components/map.module.css'

var originalCenter = {lat: 54.971907, lng: -1.614417};
// var originalBounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(54.960907,  -1.625812),
//     new google.maps.LatLng(54.983063, -1.604593) 
//     );

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
  centerMoved = (mapProps, map) => {
    var limited = false;
    var north = false;
    var south = false
    var newCenter = map.getCenter();
  }

  render() {
    return (
      <Map google={this.props.google} 
        zoom={15}
        minZoom={14}
        containerStyle={containerStyle}
        className={styles.map}
        style={style}
        initialCenter={{ lat: 54.971907, lng: -1.614417}}
        onDragend={this.centerMoved}
        bounds={[{lat: 54.960907, lng: -1.625812}, {lat: 54.983063, lng: -1.604593}]}
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
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD6VpJL_9hov0zcdQ88Jn7ITyM75GEMuW4")
})(MapContainer)