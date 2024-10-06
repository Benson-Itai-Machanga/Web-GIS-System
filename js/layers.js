
var map = L.map('map',
    {
        measureControl: true,
    });  
    map.setView([-18.046541312042145,29.43461301960174],12);
    map.zoomControl.setPosition('bottomright');

var googleSatImage = L.tileLayer(
            'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            {
              maxZoom: 50,
              subdomains:['mt0','mt1','mt2','mt3']
});

googleSatImage.addTo(map);