angular.module('myApp').service('Data', function($http){
	var parser = new DOMParser();
	
	var data = {
		initialize: function(){
			data.fetchData(function(){
				data.parseSections();
				data.parseDetails();

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
		}
	};

	if(!data.isInitialized){
		data.initialize(function(){
			
		});
		console.log('Data initialized');
	}

	return data;
});