angular.module('myApp').controller('MapCtrl', function($scope, $http){
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([42.0398,51.08802], 13);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	navigator.geolocation.getCurrentPosition(function(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		map.setView([lat, lon], 13);
	});

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('map', {
      url: "/map",
      templateUrl: "app/map/map.html",
      controller: 'MapCtrl'
    });
}]);