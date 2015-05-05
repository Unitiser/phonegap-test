'use strict';

angular.module('myApp').controller('ChartCtrl', function($scope, Data){


	Data.getZones(function(zones){
		var labels = _.pluck(zones, 'id');
		var men = _.pluck(zones, 'men');
		var women = _.pluck(zones, 'women');
		var objs = [];
		_.forEach(zones, function(n, key){
			var obj = _.pick(n, ['id', 'men', 'women']);
			objs.push(obj);
		});
		console.log(objs);
		var data = {
	    labels: labels,
		    datasets: [
		        {
		            label: "Men",
		            fillColor: "rgba(220,220,220,0.5)",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            data: men
		        },
		        {
		            label: "Women",
		            fillColor: "rgba(151,187,205,0.5)",
		            strokeColor: "rgba(151,187,205,0.8)",
		            highlightFill: "rgba(151,187,205,0.75)",
		            highlightStroke: "rgba(151,187,205,1)",
		            data: women
		        }
		    ]
		};
		// Get context with jQuery - using jQuery's .get() method.
		var ctx = $("#myChart").get(0).getContext("2d");
		// This will get the first returned node in the jQuery collection.
		var myNewChart = new Chart(ctx).Bar(data, {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"});
	});


}).config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chart', {
      url: "/chart",
      templateUrl: "app/chart/chart.html",
      controller: 'ChartCtrl'
    });
}]);