// Javascript code that allows the google maps to work and connect to Locations html page so customers can find different store locations//

function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }