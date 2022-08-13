function initMap() {
    var location = {lat: -25.363, lng: 131.044};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4, 
        center: location
    });

    var marker =  new maps.google.Marker({
        position: location,
        map: map
    });
}