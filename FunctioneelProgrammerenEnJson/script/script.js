



const mijnKaart = L.map('kaart-id')
// Laad de basiskaart
const mijnBasisKaart = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
})

var schoolIcon = L.icon({
    iconUrl: './img/school.jpg',
    iconSize:     [25, 25], // size of the icon
});

// plaats de basismap in het html element met id = kaart-id
mijnBasisKaart.addTo(mijnKaart)
// Stel het gebied van de kaart in
// de laatste parameter bepaalt de grootte van het getoonde gebied
// hoe groter het getal, hoe gedetailleerder
mijnKaart.setView([51.2191, 4.40111], 12);

// const eersteMarkering = L.marker([ 51.28256053326298, 4.402915267575786], {icon: schoolIcon}).bindPopup(
// const tweedeMarkering = L.marker([51.19420966668424, 4.4335459741221666], {icon: schoolIcon}).addTo(mijnKaart);


const request = new XMLHttpRequest()
request.open('GET', 'https://opendata.arcgis.com/datasets/0047052fbbe94040bfe0b9fcad635212_636.geojson', true)

request.onload = function () {
  // Begin accessing JSON data here
  const data = JSON.parse(this.response)

  console.log(data);

  L.geoJSON(data).addTo(mijnKaart);



}

request.send();