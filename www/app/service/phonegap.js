angular.module('myApp').service('Phonegap', function(){
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
		        //app.receivedEvent('deviceready');
		        document.addEventListener("backbutton", function(){
		        	alert('Something ...');
		        }, false);
		        document.addEventListener("menubutton", function(){
		        	alert('Something ...');
		        }, false);
		    },
		    onMenuButton: function(){
		    	app.receivedEvent('menubutton');
		    },
		    // Update DOM on a Received Event
		    receivedEvent: function(id) {
		        alert('Received Event: ' + id);
		        this.events[id]();
		    },
		    events: {
		    	deviceready: function(){
			        var parentElement = document.getElementById('deviceready');
			        var listeningElement = parentElement.querySelector('.listening');
			        var receivedElement = parentElement.querySelector('.received');

			        listeningElement.setAttribute('style', 'display:none;');
			        receivedElement.setAttribute('style', 'display:block;');
		    	},
			    menubutton: function(){
			    	alert('Do a barrel roll!');
			    }
		    }
		};	
		app.initialize();
	}

	return app;
});