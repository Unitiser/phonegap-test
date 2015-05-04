angular.module('myApp').controller('MapCtrl', function($scope, $http){
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([42.0398,51.08802], 13);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: 'GeoImage Solution Inc. - Carte Leaflet'
	}).addTo(map);
	map.attributionControl.setPrefix('');

	// map.on('click', function(e){
	// 	console.log(e.latlng.lat,',' ,e.latlng.lng);
	// });

	var geoimage = L.marker([45.37944731607625, -71.9638019800186]).addTo(map);
	geoimage.bindPopup("GeoImage Solution Inc.").openPopup();
	geoimage.on('click', geoimage.openPopup);
	
	var p1 = new L.LatLng(45.38000121118497, -71.96390390396118),
	 	p2 = new L.LatLng(45.37980904410888, -71.96304559707642),
	 	p3 = new L.LatLng(45.37903660123372, -71.96319580078125),
	 	p4 = new L.LatLng(45.37919862671139, -71.9643384218216),
	 	polygonPoints = [p1, p2, p3, p4];

	var polygon = new L.Polygon(polygonPoints);
	map.addLayer(polygon);  

	navigator.geolocation.getCurrentPosition(function(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		map.setView([lat, lon], 13);

		
		var markerIcon = L.icon({
		    iconUrl: 'img/pin.png',
		    iconRetinaUrl: 'img/pin.png',
		    iconSize: [32,32],
		    iconAnchor: [16,32],
		    popupAnchor: [6, -26]
		});

		marker = L.marker([lat, lon], {icon: markerIcon}).addTo(map);
		marker.bindPopup("Vous êtes ici!");
		
		marker.on('click', marker.openPopup);
	});

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('map', {
      url: "/map",
      templateUrl: "app/map/map.html",
      controller: 'MapCtrl'
    });
}]);