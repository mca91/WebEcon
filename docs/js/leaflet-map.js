function initMap() {
    var latLongDo = [51.488831378, 7.408498366]; // TU Dortmund
    var latLongUDE = [51.4583315, 7.003666652]; // UDE
    var latLongRUB = [51.445666, 7.261609]; // RUB


    var map = L.map("map").setView(latLongRUB, 11);

    L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);

    var icon = L.icon({
      iconUrl: "images/map-marker.png",
      iconSize:     [25, 41],
      labelAnchor: [-80, -40]
      //iconUrl: "images/map-loc.png",
      //iconSize:     [57, 66],
    });
    

    
    var marker = L.marker(latLongDo, { icon: icon }).bindTooltip('TU Dortmund University').addTo(map);
    var marker2 = L.marker(latLongUDE, { icon: icon }).bindTooltip('University of Duisburg-Essen', { noHide: true}).addTo(map);
    var marker3 = L.marker(latLongRUB, { icon: icon }).bindTooltip('RUB Bochum', { noHide: true}).addTo(map);

}
document.addEventListener("DOMContentLoaded", initMap);
