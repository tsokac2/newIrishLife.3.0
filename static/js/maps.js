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

        

}