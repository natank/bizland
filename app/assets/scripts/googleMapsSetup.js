import loadGoogleMapsApi from 'load-google-maps-api';

class Map {
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: 'AIzaSyBNtcRJs931SXBxa2om70-YuCNpIHrHHxc'
    });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 45.520562, lng: -122.677438 },
      zoom: 14,
      animation: 'DROP',
      draggable: true
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let mapElement = document.getElementById('googlemap');
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});

export { Map };
