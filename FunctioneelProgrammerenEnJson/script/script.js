const mijnKaart = L.map('kaart-id')
// Laad de basiskaart
const mijnBasisKaart = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 14,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
})
// plaats de basismap in het html element met id = kaart-id
mijnBasisKaart.addTo(mijnKaart)
// Stel het gebied van de kaart in
// de laatste parameter bepaalt de grootte van het getoonde gebied
// hoe groter het getal, hoe gedetailleerder
mijnKaart.setView([51.2191, 4.40111], 12);

const eersteMarkering = L.marker([ 51.28256053326298, 4.402915267575786]).addTo(mijnKaart);
const tweedeMarkering = L.marker([51.19420966668424, 4.4335459741221666]).addTo(mijnKaart);