var originalCenter = {lat: 54.971907, lng: -1.614417};

function initMap() {
    // TODO: set the zoom var depending on viewport size
    var map = new google.maps.Map(document.getElementById('map'), {
        center: originalCenter,
        zoom: 15,
        zoomControl: false, 
        styles: [
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
        ],
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeIds: ['roadmap']
        },
        gestureHandling: "greedy",
        streetViewControl: false,
        minZoom: 14
    });

    var originalBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(54.960907,  -1.625812),
    new google.maps.LatLng(54.983063, -1.604593) 
    );
    var tourCoordinates = [
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
    ];

    var tourPath = new google.maps.Polyline({
        path: tourCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.75,
        strokeWeight: 6
    });

    tourPath.setMap(map);
    var lengthMetres = google.maps.geometry.spherical.computeLength(tourPath.getPath());
    var lengthKilometres = Math.round(lengthMetres*0.01) / 10;
    document.getElementById("lengthKM").innerHTML = lengthKilometres;
    map.addListener('dragend', function() {
        var limited = false;
        var north = false;
        var south = false;
        var newCenter = map.getCenter();

        if (originalBounds.getSouthWest().lat() >= newCenter.lat()) {
            // too south
            map.panTo({lat: originalBounds.getSouthWest().lat(), lng: newCenter.lng()});
            south = true;
            limited = true;
        }
        if (originalBounds.getSouthWest().lng() >= newCenter.lng()) {
            // too west
            if (limited) {
                // too west AND south
                map.panTo({lat: originalBounds.getSouthWest().lat(), lng: originalBounds.getSouthWest().lng() });
            } else {
                map.panTo({lat: newCenter.lat(), lng: originalBounds.getSouthWest().lng() });
            }

            limited = true;
        }
        if (originalBounds.getNorthEast().lat() <= newCenter.lat()) {
            // too north
            if (limited) {
                // too north AND west
                map.panTo({lat: originalBounds.getNorthEast().lat(), lng: originalBounds.getSouthWest().lng() });
            } else {
                map.panTo({lat: originalBounds.getNorthEast().lat(), lng: newCenter.lng()});
            }
            north = true;
            limited = true;
        }
        if (originalBounds.getNorthEast().lng() <= newCenter.lng()) {
            // too east
            if (north) {
                // too east AND north
                map.panTo({lat: originalBounds.getNorthEast().lat(), lng: originalBounds.getNorthEast().lng() });
            } else if (south) {
                // too east AND south
                map.panTo({lat: originalBounds.getSouthWest().lat(), lng: originalBounds.getNorthEast().lng() });
            } else {
                map.panTo({lat: newCenter.lat(), lng: originalBounds.getNorthEast().lng() });
            }
            
            limited = true;
        }
        
        
    });

    var railIcon = {url:"https://www.michaeldono.com/mentors/tour/png/rail_metro.png", scaledSize:new google.maps.Size(43,16)};
    var metroIcon = {url:"https://www.michaeldono.com/mentors/tour/png/metro.png", scaledSize:new google.maps.Size(16,16)};
    var originIcon = {url:"png/origin.png", scaledSize:new google.maps.Size(18,18)};
    var pointsOfInterest = [{url:"png/poi1.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi2.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi3.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi4.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi5.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi6.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi7.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi8.png", scaledSize:new google.maps.Size(18,18)},
    {url:"png/poi9.png", scaledSize:new google.maps.Size(18,18)},];

    var centralStation = new google.maps.Marker({
        position: {lat: 54.968492, lng: -1.617075},
        map: map,
        icon: railIcon
    });
    var centralString = '<div class="transitLabel">'+
                            '<h1>Central Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/rail.png"/>National Rail</h2>'+
                            '<div class="tocs midSection">'+
                                '<div class="toc lner"><p>LNER<p></div><br>'+
                                '<div class="toc tpe"><p>Transpennine Express<p></div><br>'+
                                '<div class="toc xc"><p>CrossCountry<p></div><br>'+
                                '<div class="toc northern"><p>Northern<p></div><br>'+
                            '</div>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc greenLine"><p>Green Line<p></div><br>'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var centralInfoWindow = new google.maps.InfoWindow({
        content: centralString
    });
    centralStation.addListener('click', function() {
        gatesheadInfoWindow.close(map, gatesheadStation);

        centralInfoWindow.open(map, centralStation);

        monumentInfoWindow.close(map, monumentStation);
        haymarketInfoWindow.close(map, haymarketStation);
        stJamesInfoWindow.close(map, stJamesStation);
        manorsInfoWindow.close(map, manorsStation);
    });
    var gatesheadStation = new google.maps.Marker({
        position: {lat: 54.962207, lng: -1.604320},
        map: map,
        icon: metroIcon
    });
    var gatesheadString = '<div class="transitLabel">'+
                            '<h1>Gateshead Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc greenLine"><p>Green Line<p></div><br>'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var gatesheadInfoWindow = new google.maps.InfoWindow({
        content: gatesheadString
    });
    gatesheadStation.addListener('click', function() {
        gatesheadInfoWindow.open(map, gatesheadStation);

        centralInfoWindow.close(map, centralStation);
        monumentInfoWindow.close(map, monumentStation);
        haymarketInfoWindow.close(map, haymarketStation);
        stJamesInfoWindow.close(map, stJamesStation);
        manorsInfoWindow.close(map, manorsStation);
    });
    var monumentStation = new google.maps.Marker({
        position: {lat: 54.973847, lng: -1.613261},
        map: map,
        icon: metroIcon
    });
    var monumentString = '<div class="transitLabel">'+
                            '<h1>Monument Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc greenLine"><p>Green Line<p></div><br>'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var monumentInfoWindow = new google.maps.InfoWindow({
        content: monumentString
    });
    monumentStation.addListener('click', function() {
        gatesheadInfoWindow.close(map, gatesheadStation);
        centralInfoWindow.close(map, centralStation);

        monumentInfoWindow.open(map, monumentStation);

        haymarketInfoWindow.close(map, haymarketStation);
        stJamesInfoWindow.close(map, stJamesStation);
        manorsInfoWindow.close(map, manorsStation);
    });
    var haymarketStation = new google.maps.Marker({
        position: {lat: 54.977481, lng: -1.613876},
        map: map,
        icon: metroIcon
    });
    var haymarketString = '<div class="transitLabel">'+
                            '<h1>Haymarket Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc greenLine"><p>Green Line<p></div><br>'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var haymarketInfoWindow = new google.maps.InfoWindow({
        content: haymarketString
    });
    haymarketStation.addListener('click', function() {
        gatesheadInfoWindow.close(map, gatesheadStation);
        centralInfoWindow.close(map, centralStation);
        monumentInfoWindow.close(map, monumentStation);

        haymarketInfoWindow.open(map, haymarketStation);

        stJamesInfoWindow.close(map, stJamesStation);
        manorsInfoWindow.close(map, manorsStation);
    });
    var stJamesStation = new google.maps.Marker({
        position: {lat: 54.974343, lng: -1.620630},
        map: map,
        icon: metroIcon
    });
    var stJamesString = '<div class="transitLabel">'+
                            '<h1>St James Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var stJamesInfoWindow = new google.maps.InfoWindow({
        content: stJamesString
    });
    stJamesStation.addListener('click', function() {
        gatesheadInfoWindow.close(map, gatesheadStation);
        centralInfoWindow.close(map, centralStation);
        monumentInfoWindow.close(map, monumentStation);
        haymarketInfoWindow.close(map, haymarketStation);
        
        stJamesInfoWindow.open(map, stJamesStation);

        manorsInfoWindow.close(map, manorsStation);
    });
    var manorsStation = new google.maps.Marker({
        position: {lat: 54.973970, lng: -1.604811},
        map: map,
        icon: metroIcon
    });
    var manorsString = '<div class="transitLabel">'+
                            '<h1>Manors Station</h1>'+
                            '<h2><img src="https://www.michaeldono.com/mentors/tour/png/metro.png"/>Metro</h2>'+
                            '<div class="tocs">'+
                                '<div class="toc yellowLine"><p>Yellow Line<p></div><br>'+
                            '</div>'+
                        '</div>';
    var manorsInfoWindow = new google.maps.InfoWindow({
        content: manorsString
    });
    manorsStation.addListener('click', function() {
        gatesheadInfoWindow.close(map, gatesheadStation);
        centralInfoWindow.close(map, centralStation);
        monumentInfoWindow.close(map, monumentStation);
        haymarketInfoWindow.close(map, haymarketStation);
        stJamesInfoWindow.close(map, stJamesStation);
        
        manorsInfoWindow.open(map, manorsStation);
    });
    var originUSB = new google.maps.Marker({
        position: {lat: 54.973513, lng: -1.625076},
        map: map,
        icon: originIcon
    });
    var poi1 = new google.maps.Marker({
        position: {lat: 54.973536, lng: -1.619654}, // Chinatown Gate
        map: map,
        icon: pointsOfInterest[0]
    });

    var poi2 = new google.maps.Marker({
        position: {lat: 54.972544, lng: -1.617475}, // The Gate
        map: map,
        icon: pointsOfInterest[1]
    });

    var poi3 = new google.maps.Marker({
        position: {lat: 54.972810, lng: -1.615378}, // Grainger Market
        map: map,
        icon: pointsOfInterest[2]
    });

    var poi4 = new google.maps.Marker({
        position: {lat: 54.972680, lng: -1.612442}, // Theatre Royal
        map: map,
        icon: pointsOfInterest[3]
    });

    var poi5 = new google.maps.Marker({
        position: {lat: 54.971232, lng: -1.614465}, // Bigg Market
        map: map,
        icon: pointsOfInterest[4]
    });

    var poi6 = new google.maps.Marker({
        position: {lat: 54.970867, lng: -1.615544}, // Forbidden Planet
        map: map,
        icon: pointsOfInterest[5]
    });

    var poi7 = new google.maps.Marker({
        position: {lat: 54.969903, lng: -1.611950}, //  St. Nicholas, Flares
        map: map,
        icon: pointsOfInterest[6]
    });

    var poi8 = new google.maps.Marker({
        position: {lat: 54.967380, lng: -1.607570}, // Swing Bridge
        map: map,
        icon: pointsOfInterest[7]
    });

    var poi9 = new google.maps.Marker({
        position: {lat: 54.967395, lng: -1.605491}, // By The River Brew, Backyard Bike Shop
        map: map,
        icon: pointsOfInterest[8]
    });

    poi9.addListener('click', function() {
        // document.getElementById("poi1").className() = "open";
        
    });
}