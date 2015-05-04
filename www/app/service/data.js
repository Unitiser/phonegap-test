angular.module('myApp').service('Data', function($http){
	var parser = new DOMParser();
	
	var data = {
		initialize: function(){
			data.fetchData(function(){
				data.parseSections();
				data.parseDetails();
				data.parseZones();
				data.isInitialized = true;
			});
		},
		fetchData: function(cb){
			$http.get('app/service/data.xml')
				.success(function(value){
					data.raw = value;
					console.log('data fetched1');
					cb()
				})
				.error(function(err){
					console.log(err);
				});
		},
		parseSections: function(){
			var xml = parser.parseFromString(data.raw, 'text/xml');
			var sections = xml.getElementsByTagName("section");
			var sectionsMap = {};
			for(var i = 0; i < sections.length; i++){
				var section = sections[i];
				sectionsMap[section.attributes['name'].nodeValue] = section;
			}
			data.sections = sectionsMap;
			console.log('Section parsed');
		},
		parseDetails: function(){
			var detailsElements = data.sections['detail'].getElementsByTagName('info');
			var details = {};
			for(var i = 0; i < detailsElements.length; i++){
				details[detailsElements[i].attributes['name'].nodeValue] = detailsElements[i].firstChild.nodeValue;
			}
			data.details = details;
			console.log('Details parsed');
		},
		parseZones: function(){
			var compElements = data.sections['composition'].getElementsByTagName('composition');
			var valueElements = data.sections['values'].getElementsByTagName('value');
			var zones = [];
			for(var i = 0; i < compElements.length; i++){
				var comp = {};
				comp.id = compElements[i].attributes['zone'].nodeValue;
				comp.name = compElements[i].attributes['value'].nodeValue.replace(/,/g, ', ');
				comp.men = valueElements[i].attributes['men'].nodeValue;
				comp.women = valueElements[i].attributes['women'].nodeValue;
				comp.total = valueElements[i].attributes['total'].nodeValue;
				zones.push(comp);
			}
			data.zones = zones;
		},
		getDetails: function(cb){
			if(data.details){
				cb(data.details);
			}else{ //If details are not loaded yet, wait a lil bit...
				setTimeout(function() {
					data.getDetails(cb);
				}, 500);
			}
		},
		getZones: function(cb){
			if(data.zones){
				cb(data.zones);
			}else{ //If details are not loaded yet, wait a lil bit...
				setTimeout(function() {
					data.getZones(cb);
				}, 500);
			}
		}
	};

	if(!data.isInitialized){
		data.initialize();
		console.log('Data initialized');
	}

	return data;
});