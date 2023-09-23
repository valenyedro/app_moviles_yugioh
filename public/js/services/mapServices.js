// mapa principal
let map;
let catedralUbi = {lat: -34.925089658794505,lon: -57.951898214289486}

export function StartMapService() {

    const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    
    //ubicacion del mapa
    map = L.map('map').setView([catedralUbi.lat,catedralUbi.lon], 13);

    createMarker(catedralUbi.lat,catedralUbi.lon);
 
    L.tileLayer(tilesProvider, {
        maxZoom: 18,
    }).addTo(map);

  
    getPosition();
}

function getPosition() {
    if (navigator.geolocation) {
        let success = function(position) {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            createMarker(latitud, longitud);
            crearRuta({latitud,longitud},{latitud : catedralUbi.lat, longitud : catedralUbi.lon})
        };
        navigator.geolocation.getCurrentPosition(success, function(msg) {
            console.error(msg);
        });
    }
}


function createMarker(lat, lon) {

    // Crea un marcador
    let marker = L.marker([lat, lon]).addTo(map);
}

function crearRuta(partida,llegada){

    L.Routing.control({
        waypoints: [
            L.latLng(partida.latitud, partida.longitud), 
            L.latLng(llegada.latitud, llegada.longitud) 
        ],
        routeWhileDragging: true 
    }).addTo(map);

}
