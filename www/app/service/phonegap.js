angular.module('myApp').service('Phonegap', function($rootScope){
	var app
	if(!app){
		console.log('Initializing phonegap');			
		app = {
		    // Application Constructor
		    initialize: function() {
		        this.bindEvents();
		        return this;
		    },
		    // Bind Event Listeners
		    //
		    // Bind any events that are required on startup. Common events are:
		    // 'load', 'deviceready', 'offline', and 'online'.
		    bindEvents: function() {
		        document.addEventListener('deviceready', this.onDeviceReady, false);
		    },
		    // deviceready Event Handler
		    //
		    // The scope of 'this' is the event. In order to call the 'receivedEvent'
		    // function, we must explicitly call 'app.receivedEvent(...);'
		    onDeviceReady: function() {
		        app.receivedEvent('deviceready');
		        document.addEventListener("backbutton", function(){
		        	app.receivedEvent('backbutton');
		        }, false);
		        document.addEventListener("menubutton", function(){
		        	app.receivedEvent('menubutton');
		        }, false);
		    },

		    // Update DOM on a Received Event
		    receivedEvent: function(id) {
		        console.log('Received Event: ' + id);
		        this.events[id]();
		    },
		    events: {
		    	deviceready: function(){
		    		$rootScope.deviceready = true;
		    		$rootScope.$broadcast('deviceready');
		    	},
			    menubutton: function(){
			    	alert('Do a barrel roll!');
			    },
			    backbutton: function(){
			    	console.log('Back button fired...');
			    }
		    }
		};	
		app.initialize();
	}

	return app;
});