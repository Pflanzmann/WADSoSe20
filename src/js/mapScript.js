L.mapquest.key = 'sSfdB2tn4GGZWrxHAAZihbOybZExvjMa';
var baseLayer = L.mapquest.tileLayer('dark');
var markerLayer = null;
var niceMap = null;

//L.mapquest.geocoding().geocode(['Berlin, De'], createMap);
L.mapquest.geocoding().geocode(['Berlin, De'], createMap);

function createMap(error, response) {
    var location = response.results[0].locations[0];
    var latLng = location.displayLatLng;

    if (niceMap == null)
        this.niceMap = L.mapquest.map('map', {
            //center: [52.520007, 13.404954],
            center: [52.520007, 13.404954],
            center: latLng,
            zoom: 14,
            layers: baseLayer
        });

    markerLayer = L.layerGroup();
    markerLayer.addTo(niceMap);

    createMarker();
    return map;
}

function createMarker() {
    markerLayer.clearLayers();
    if(user != null)

    for (let index = 0; index < contacts.length; index++) {

        if ((!contacts[index].isPrivate || user.isAdmin) && contacts[index].isShown) {
            L.mapquest.geocoding().geocode({
                street: contacts[index].straße,
                city: contacts[index].stadt,
                state: contacts[index].land,
                postalCode: contacts[index].plz
            }, newFunction);
        }
    }
}

function newFunction(error, response) {
    var location = response.results[0].locations[0];
    var locationLatLng = location.latLng;

    L.marker(locationLatLng, { icon: L.mapquest.icons.marker() })
        .bindPopup(locationLatLng.lat + locationLatLng.lng).addTo(markerLayer);

}

function removeMarkers() {
    markerLayer.clearLayers();
}