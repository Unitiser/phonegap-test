'use strict';

angular.module('myApp').controller('ChartCtrl', function($scope, Data){


	Data.getZones(function(zones){
		
	});

	// Get context with jQuery - using jQuery's .get() method.
	var ctx = $("#myChart").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.

	var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.5)",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.5)",
	            strokeColor: "rgba(151,187,205,0.8)",
	            highlightFill: "rgba(151,187,205,0.75)",
	            highlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};
	var myNewChart = new Chart(ctx).Bar(data, {});

}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chart', {
      url: "/chart",
      templateUrl: "app/chart/chart.html",
      controller: 'ChartCtrl'
    });
}]);