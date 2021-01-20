import L from 'leaflet';

function getLayers() {
    return [
        {
            layerName: 'Mapbox',
            layer: L.tileLayer(
                'https://api.mapbox.com/styles/v1/hloughrey/ckjj5g7w50b3m19mmey8zojrw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGxvdWdocmV5IiwiYSI6ImNramo1bGIybDJvOTcydnNjd283bWxkYmsifQ.zLyQVYhcHSq0HFAZg5oijQ',
                {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken:
                        'pk.eyJ1IjoiaGxvdWdocmV5IiwiYSI6ImNramo1bGIybDJvOTcydnNjd283bWxkYmsifQ.zLyQVYhcHSq0HFAZg5oijQ',
                }
            ),
        },
        {
            layerName: 'HOSM',
            layer: L.tileLayer(
                'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 18,
                }
            ),
        },
    ];
}

export function initMap() {
    const myMap = L.map('basic-map', {
        center: [51.69972661906321, -0.9071014739207922],
        zoom: 13,
        scrollWheelZoom: false,
        layers: [getLayers()[0].layer],
    });

    const baseMaps = getLayers().reduce(
        (accumulator, current) => ({
            ...accumulator,
            [current.layerName]: current.layer,
        }),
        {}
    );

    L.control.layers(baseMaps).addTo(myMap);
    L.marker([51.69972661906321, -0.9071014739207922])
        .addTo(myMap)
        .bindPopup(
            '<h3>MapAction</h3><p>Douglas Court <br />1-2 Seymour Business Park<br />Chinnor <br />Oxfordshire <br />United Kingdom <br />OX39 4HA</p>'
        );
}
