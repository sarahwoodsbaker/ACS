var map = L.map('map').setView([43.0, -70.0], 10); // Adjust to your location

// Add a tile layer (Mapbox, OpenStreetMap, etc.)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load live data from a GeoJSON API (Replace with your API URL)
fetch('https://example.com/live-geojson') // Replace with your live GeoJSON URL
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    })
    .catch(error => console.error('Error loading data:', error));
