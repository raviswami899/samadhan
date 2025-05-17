
  document.addEventListener("DOMContentLoaded", function () {
    // Example coordinates (array of [lat, lng])
    const coords = [
        [26.9124, 75.7873],  // Jaipur
        [26.2389, 73.0243],  // Jodhpur
        [24.5854, 73.7125],  // Udaipur
        [28.0229, 73.3119],  // Bikaner
        [26.4499, 74.6399],  // Ajmer
        [27.55299, 76.63457], // Alwar
        [27.2173, 77.4895],   // Bharatpur
        [25.2138, 75.8648],   // Kota // Example: San Francisco
    ];

    // Create the map
    const map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false,       // Disable zoom on scroll
      touchZoom: 'center',          // Enable pinch-to-zoom (multi-touch only)
      doubleClickZoom: true,        // Keep double-click zoom if desired
      dragging: true                // Allow dragging
    }).setView(coords[0], 6);

    // Define tile layers
    // const darkTile = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; OpenStreetMap contributors',
    // });
    const darkTile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    });

    const lightTile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    });

    // Add default (dark) tile
    darkTile.addTo(map);

    // Add circle(s) to highlight area(s)
    coords.forEach(coord => {
      L.circle(coord, {
        color: '#00BFFF',
        fillColor: '#00BFFF',
        fillOpacity: 0.2,
        radius: 10000// radius in meters
      }).addTo(map);
    });

    // Handle light/dark theme switching
    function updateMapTheme() {
      if (document.body.classList.contains('light-mode')) {
        map.eachLayer(layer => map.removeLayer(layer));
        lightTile.addTo(map);
        coords.forEach(coord => {
          L.circle(coord, {
            color: '#007BFF',
            fillColor: '#007BFF',
            fillOpacity: 0.2,
            radius: 40000
          }).addTo(map);
        });
      } else {
        map.eachLayer(layer => map.removeLayer(layer));
        darkTile.addTo(map);
        coords.forEach(coord => {
          L.circle(coord, {
            color: '#00BFFF',
            fillColor: '#00BFFF',
            fillOpacity: 0.2,
            radius: 40000
          }).addTo(map);
        });
      }
    }

    // Observe changes to body class
    const observer = new MutationObserver(updateMapTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Initial check
    updateMapTheme();
  });

