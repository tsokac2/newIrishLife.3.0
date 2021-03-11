function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom : 11,
        center: {
            lat: 53.350140,
            lng: -6.266155
        }
    });
/*addDomListener EVENTS  - CODE SOURCE: https://developers.google.com/maps/documentation/javascript/overview*/
google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
        var busMarkerIcon = {
            url:"static/images/bus_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        };

        var dartMarkerIcon = {
            url:"static/images/dart_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        };

        var luasMarkerIcon = {
            url:"static/images/luas_marker.png",
            scaledSize: new google.maps.Size(50, 50)
        };

        var Bus747Stop = new google.maps.Marker({
            position: {lat: 53.42810, lng: -6.24407},
            map: map,
            title: "BUS 747 Stop",
            icon: busMarkerIcon
        });

        var BusarasBusStation = new google.maps.Marker({
            position: {lat: 53.34983, lng: -6.25185},
            map: map,
            title: "Busaras Central Bus Station",
            icon: busMarkerIcon
        });

        var HeustonStation = new google.maps.Marker({
            position: {lat: 53.34646, lng: -6.29413},
            map: map,
            title: "Heuston Station",
            icon: dartMarkerIcon
        });

        var ConnollyTrainStation = new google.maps.Marker({
            position: {lat: 53.35165, lng: -6.24970},
            map: map,
            title: "Busaras Central Station",
            icon: dartMarkerIcon
        });

}